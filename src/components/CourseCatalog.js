import React from 'react';
import CourseItem from './CourseItem'; 

function CourseCatalog({ courses, enrolledCourses, onEnroll }) {
  return (
    <div>
      <h2>Course Catalog</h2>
      <div className="course-list">
        {courses
          .filter(course => !enrolledCourses.find(ec => ec.id === course.id))
          .map(course => (
            <CourseItem
              key={course.id}
              course={course}
              isEnrolled={false}
              onEnroll={onEnroll}
            />
          ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
