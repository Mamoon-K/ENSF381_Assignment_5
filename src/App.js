import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Homepage";
import Login from "./components/LoginPage";
import Courses from "./components/CoursesPage";
import logo from './logo.jpg';



function App() {
  return (
    <div>
    <header>
    <img src={logo}  alt="Logo" className="logo" />
      <h1>LMS - Learning Management System</h1>
      </header>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
  </BrowserRouter>
    
    </div>
    
  );
}

export default App;
