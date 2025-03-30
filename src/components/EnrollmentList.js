import React from 'react';
import EnrolledCourse from './EnrolledCourse';

function EnrollmentList({ enrolledCourses, onDrop }) {
  const totalCredits = enrolledCourses.length * 3;

  return (
    <div>
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="course-list">
          {enrolledCourses.map(course => (
            <EnrolledCourse key={course.id} course={course} onDrop={onDrop} />
          ))}
        </div>
      )}
      <p><strong>Total Credit Hours:</strong> {totalCredits}</p>
    </div>
  );
}

export default EnrollmentList;
