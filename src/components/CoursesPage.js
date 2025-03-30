import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';
import courses from '../data/courses';

function CoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem('enrolledCourses');
    if (storedCourses) {
      setEnrolledCourses(JSON.parse(storedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleEnroll = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  const handleDrop = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <EnrollmentList enrolledCourses={enrolledCourses} onDrop={handleDrop} />
        <CourseCatalog
          courses={courses}
          enrolledCourses={enrolledCourses}
          onEnroll={handleEnroll}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;
