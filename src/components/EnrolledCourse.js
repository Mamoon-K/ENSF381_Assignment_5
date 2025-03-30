import React from 'react';

function EnrolledCourse({ course, onDrop }) {
  return (
    <div className="course-item">
      <img
        src={course.image}
        alt={course.name}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h3>{course.name}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p>{course.description}</p>
      <button onClick={() => onDrop(course.id)}>Drop Course</button>
    </div>
  );
}

export default EnrolledCourse;
