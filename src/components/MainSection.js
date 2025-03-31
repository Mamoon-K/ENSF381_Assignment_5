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
  );
};

export default MainSection;