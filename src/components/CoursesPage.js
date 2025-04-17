import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';
import courses from '../data/courses';

function CoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [message, setMessage] = useState(null);
  const [studentId, setStudentId] = useState(null); // Assuming you have a way to get the student ID
  

  useEffect(() => {
    const storedCourses = localStorage.getItem('enrolledCourses');
    if (storedCourses) {
      setEnrolledCourses(JSON.parse(storedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  function handleEnroll (id){
      fetch(`http://127.0.0.1:5000/enroll/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ enrolledCourses})
      })
        .then(response => response.json())
        .then(data => {
          setEnrolledCourses(enrolledCourses => [...enrolledCourses, data]);
          setMessage(data.message); 
        })        
        .catch(error => console.error('Error:', error));  
  }

   const handleDrop = (courseId) => {
    fetch(`http://127.0.0.1:5000/drop/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: courseId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to drop course');
        }
        return response.json();
      })
      .then(() => {
        // Remove the dropped course from the list
        setEnrolledCourses(prevCourses => 
          prevCourses.filter(course => course.id !== courseId)
        );
        setMessage('Successfully dropped course');
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Failed to drop course');
      });
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
