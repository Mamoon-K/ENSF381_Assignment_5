import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <header>
      <img src="images/logo.jpg" alt="LMS Logo" style={{ width: '100px', height: '100px' }} />
      <h1>LMS - Learning Management System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
