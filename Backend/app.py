from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

# Allow requests from React frontend at http://localhost:3000
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load course and testimonial data
with open('courses.json') as f:
    courses = json.load(f)
with open('testimonials.json') as f:
    testimonials = json.load(f)

students = []

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    required_fields = ['username', 'password', 'email']

    if not all(field in data for field in required_fields):
        return jsonify({'message': 'Missing fields'}), 400

    student_id = len(students) + 1
    new_student = {
        'id': student_id,
        'username': data['username'],
        'password': data['password'],  # Note: Don't use plain passwords in production
        'email': data['email'],
        'enrolled_courses': []
    }
    students.append(new_student)
    return jsonify({'message': 'Registration successful'}), 200

@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)

@app.route('/testimonials', methods=['GET'])
def get_testimonials():
    return jsonify(testimonials)

if __name__ == '__main__':
    print("✅ Loaded courses.json")
    print("✅ Loaded testimonials.json")
    print("🚀 Starting LMS backend...")
    app.run(debug=True)
