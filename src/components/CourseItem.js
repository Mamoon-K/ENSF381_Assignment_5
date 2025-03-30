import React from 'react';

function CourseItem({ course, isEnrolled, onEnroll }) {
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
      <div className="hover-description">{course.description}</div>
      {!isEnrolled && (
        <button onClick={() => onEnroll(course)}>Enroll Now</button>
      )}
    </div>
  );
}

export default CourseItem;
