import React, { useState, useEffect } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";
import "../styles.css"; 




const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

  useEffect(() => {
    setFeaturedCourses(courses.sort(() => 0.5 - Math.random()).slice(0, 3));
    setDisplayedTestimonials(testimonials.sort(() => 0.5 - Math.random()).slice(0, 2));
  }, []);

  return (
    <div>
    <main class="index">
        <section id="about">
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- Enroll in courses</p>
                <p>- Attempt quizzes</p>
                <p>- View leaderboards</p>
            </div>
        </section>
    </main>

    <main className="courseview">
        <h2 style={{ textAlign: "center" }}>Featured Courses</h2>
          <hr />

          <table className="cv">
            <tr>
              {featuredCourses.map((course) => (
                  <td>
                  <img src={course.image} alt={course.name}  />
                  <p>{course.name}</p>
                  <p>{course.instructor}</p>
                  </td>
            
              ))}
            </tr>
              
          </table>

        <h2 >Testimonials</h2>
        <hr />
        <table className="cv">
          <tr>
          {displayedTestimonials.map((testimonial, index) => (
            <td>
            <div key={index} className="testimonial-card" >
              <p><strong>{testimonial.studentName}</strong> - {testimonial.courseName}</p>
              <p>"{testimonial.review}"</p>
              <p>Rating: {"★".repeat(testimonial.rating)}</p>
            </div>
            </td>
          ))}
          </tr>
      </table>
    </main>
    </div>
  );
};

export default MainSection;


