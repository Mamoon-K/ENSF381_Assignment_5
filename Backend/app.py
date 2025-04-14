from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")  # Enable CORS only for React dev server

# Load data
with open("C:\\Users\\bashi\\UofC\\2025_WINTER\\ENSF381\\ENSF381_Assignment_5\\Backend\\courses.json", encoding="utf-8") as f:
    courses = json.load(f)

with open("C:\\Users\\bashi\\UofC\\2025_WINTER\\ENSF381\\ENSF381_Assignment_5\\Backend\\testimonials.json", encoding="utf-8") as f:
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
        "enrolled_courses": data.get('enrolled_courses') or [] 
    }

    students.append(new_student)
    print(f"New student registered: {new_student}")   #Just so we know it works
    return jsonify({"message": "Signup successful!"}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    for student in students:
        if student['username'] == username and student['password'] == password:
            print(f"Student logged in: {student}")
            return jsonify({"message": "Login successful!"}), 200

    return jsonify({"message": "Invalid credentials"}), 401



@app.route('/testimonials', methods=['GET'])
def get_testimonials():
    return jsonify(random.sample(testimonials, 2))


@app.route('/enroll/<student_id>', methods=['POST'])
def enroll(student_id):
   new_course = request.get_json()
   new_course['course_id'] = len(courses) + 1
   courses.append(new_course)
   print(f"New course added: {new_course}")   #Just so we know it works
   return jsonify(new_course)
   

    
    
@app.route('/drop/<student_id>', methods=['DELETE'])
def drop_course(student_id):
    course_id = request.json.get('id')
    
    # Find the student
    student = next((s for s in students if s['id'] == student_id), None)
    if not student:
        return jsonify({"message": "Student not found"}), 404
    
    # Remove course from enrolled_courses
    student['enrolled_courses'] = [c for c in student['enrolled_courses'] if c['id'] != course_id]
    
    return jsonify({"message": "Course dropped successfully"}), 200


@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)


@app.route('/student_courses/<student_id>', methods=['GET'])
def get_student_courses(student_id):
    for student in students:
        if student['id'] == int(student_id):
            return jsonify({"enrolled_courses": student['enrolled_courses']})
        
    return jsonify({"enrolled_courses": []}), 400


if __name__ == '__main__':
    print("Loaded courses.json")
    print("Loaded testimonials.json")
    print("Starting LMS backend...")
    app.run(debug=True)
