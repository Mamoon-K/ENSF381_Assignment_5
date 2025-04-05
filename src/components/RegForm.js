import React, { useState } from 'react';
import '../RegForm.css';
import { useNavigate } from 'react-router-dom';

const RegForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, password, confirmPassword, email } = formData;
    const errors = [];

    const usernameRegex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()\-=+[\]{}|;:'",.<>?/`~]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(username)) {
      errors.push("Invalid username (Reason: Must start with a letter and be 3–20 characters long)");
    }

    if (!passwordRegex.test(password)) {
      errors.push("Invalid password (Reason: Must be ≥8 characters with uppercase, lowercase, number, and special character)");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    if (!emailRegex.test(email)) {
      errors.push("Invalid email (Reason: Must include a valid '@' and a domain like '.com', '.ca', etc)");
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorList = validateForm();
    if (errorList.length > 0) {
      setErrors(errorList);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setErrors(["Signup successful! Redirecting to login..."]);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrors([data.message || 'Signup failed.']);
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      setErrors(['Server error.']);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-box" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit" className="signup-button">Sign Up</button>

        <div className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>

      {errors.length > 0 && (
        <div className="auth-message error">
          {errors.map((err, idx) => (
            <div key={idx}>{err}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegForm;
