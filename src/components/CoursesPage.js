import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseCatalog from './CourseCatalog';       // ✅ match filename
import EnrollmentList from './EnrollmentList';     // ✅ match filename
import courses from '../data/courses';             // ✅ relative path


function CoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedCourses = localStorage.getItem('enrolledCourses');
    if (storedCourses) {
      setEnrolledCourses(JSON.parse(storedCourses));
    }
  }, []);

  // Save to localStorage on change
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
    <div>
      <Header />
      <main className="index">
        <EnrollmentList enrolledCourses={enrolledCourses} onDrop={handleDrop} />
        <CourseCatalog
          courses={courses}
          enrolledCourses={enrolledCourses}
          onEnroll={handleEnroll}
        />
      </main>
      <Footer />
    </div>
  );
}

export default CoursesPage;
