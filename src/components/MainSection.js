import React, { useEffect, useState } from 'react';
import courses from '../data/courses';
import testimonials from '../data/testimonials';
import '../styles.css';

function MainSection() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

  useEffect(() => {
    // Randomize courses and testimonials on each render
    const shuffledCourses = [...courses].sort(() => 0.5 - Math.random());
    const shuffledTestimonials = [...testimonials].sort(() => 0.5 - Math.random());

    setFeaturedCourses(shuffledCourses.slice(0, 3));       // 3 random courses
    setDisplayedTestimonials(shuffledTestimonials.slice(0, 2)); // 2 random testimonials
  }, []);

  return (
    <main className="index">
      <section id="about">
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) helps students and instructors manage courses,
          quizzes, and track performance efficiently.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>Enroll in courses</li>
          <li>Attempt quizzes</li>
          <li>View leaderboards</li>
        </ul>
      </section>

      <section>
        <h2>Featured Courses</h2>
        <div className="course-list">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p>{course.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Testimonials</h2>
        {displayedTestimonials.map((t, index) => (
          <div key={index} className="testimonial-box">
            <p><strong>{t.studentName}</strong> on <em>{t.courseName}</em></p>
            <p>"{t.review}"</p>
            <p>{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MainSection;
