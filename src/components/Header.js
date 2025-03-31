import React from "react";

const about_style = {
  padding: "20px",
  textAlign: "center",
  alignItems: "center",
  margin: "20px auto",
  maxWidth: "90%"
};



function HomePage() {
  return (
    <div>
      <div >
        <nav style={styles.header}>
        <a href='/' style={styles.link}> Home </a>
        <a href='/login' style={styles.link}> Login </a>
        <a href='/Courses'  style={styles.link}> Courses </a>
        </nav>
      </div>
      <main class="index" style={about_style}>
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
    </div>
  );
};



export default HomePage;

const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#003366", color: "white" },
  link: { margin: "0px 10px", color: "white", textDecoration: "none" }
};