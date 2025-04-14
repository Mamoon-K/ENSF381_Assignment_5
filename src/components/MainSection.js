import React, { useState, useEffect, use } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";
import "../styles.css"; 




const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/courses')
      .then(response => response.json())
      .then(data => {
        setFeaturedCourses([...data]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/testimonials') // Fetch testimonials from the server
    .then(response => response.json()) // Parse the response as JSON
    .then(data => setDisplayedTestimonials(data)) // Set the persons state with the fetched data
    .catch(error => console.error('Error fetching persons:', error));
    }, [])

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


