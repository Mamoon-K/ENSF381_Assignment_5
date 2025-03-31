import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';

export const AuthContext = createContext();

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setStatus({ type: 'error', message: 'Username and password are required.' });
      return;
    }
    if (password.length < 8) {
      setStatus({ type: 'error', message: 'Password must be at least 8 characters.' });
      return;
    }

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      const match = users.find(user => user.username === username && user.email === password);
      if (match) {
        setStatus({ type: 'success', message: 'Login successful! Redirecting...' });
        setTimeout(() => navigate('/courses'), 2000);
      } else {
        setStatus({ type: 'error', message: 'Invalid credentials.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Login failed. Please try again.' });
    }
  };

  return (
    <AuthContext.Provider value={{ username, password }}>
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
        {status && <DisplayStatus type={status.type} message={status.message} />}
      </div>
    </AuthContext.Provider>
  );
}

export default LoginForm;
