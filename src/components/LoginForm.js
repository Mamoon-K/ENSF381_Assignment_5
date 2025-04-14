import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';

// export const AuthContext = createContext();

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage('Username and password are required.' );
      return;
    }
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.' );
      return;
    }

    await fetch('http://127.0.0.1:5000/login', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': username, 'password': password })
      }).then(response => {
        if(response.ok) {
          return response.json();
        } 
        else {
          throw new Error(' Please check your credentials.');
        }
      })
      .then(data => setMessage(data.message ))
      .then(() => {
        setTimeout(() => {
          navigate('/courses');
        }, 2000);
      })
      .catch(err => {
        console.error("Error:", err);
        setMessage(err.message );
      });
    };
  

  return (
    
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (use email)"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p><a href="#">Forgot Password?</a></p>
        <p>{message}</p>
      </div>
    
  );
}

export default LoginForm;
