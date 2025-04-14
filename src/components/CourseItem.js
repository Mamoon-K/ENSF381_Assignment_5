import React, { useState } from 'react';

function CourseItem({ course, isEnrolled, onEnroll }) {
  const [showDescription, setShowDescription] = useState(false);
  const [message, setMessage] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  

  return (
    <div
      className="course-item"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img
        src={course.image}
        alt={course.name}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h3>{course.name}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      {showDescription && (
        <div className="hover-description">{course.description}</div>
      )}
      {!isEnrolled && (
        <button onClick={() => onEnroll(course.id)}>Enroll Now</button>
      )}
    </div>
  );
}

export default CourseItem;
