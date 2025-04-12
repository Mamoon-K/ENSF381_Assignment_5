from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")  # Enable CORS only for React dev server

# Load data
with open("courses.json") as f:
    courses = json.load(f)

with open("testimonials.json") as f:
    testimonials = json.load(f)

students = []

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')

    for student in students:
        if student['username'] == username:
            return jsonify({"message": "Username already taken"}), 400

    new_student = {
        "id": len(students) + 1,
        "username": username,
        "password": data.get('password'),
        "email": data.get('email'),
        "enrolled_courses": []
    }

    students.append(new_student)
    return jsonify({"message": "Signup successful!"}), 200

@app.route('/testimonials', methods=['GET'])
def get_testimonials():
    return jsonify(random.sample(testimonials, 2))

if __name__ == '__main__':
    print("✅ Loaded courses.json")
    print("✅ Loaded testimonials.json")
    print("🚀 Starting LMS backend...")
    app.run(debug=True)
