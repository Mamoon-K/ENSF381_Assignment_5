import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CoursesPage from './components/CoursesPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
