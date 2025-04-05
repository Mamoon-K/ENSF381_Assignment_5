import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav style={styles.header}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
      </nav>
    </div>
  );
}

export default Header;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#003366",
    color: "white"
  },
  link: {
    margin: "0px 10px",
    color: "white",
    textDecoration: "none"
  }
};
