import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Assignment from './pages/Assignment';
import PythonAssignments from './pages/PythonAssignments'; // Import PythonAssignments
import About from './pages/About'; // Make sure to import About
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/PythonAssignments">pythonAsignments</Link>
          <Link to="/PythonAssignments">pythonTests</Link>
          <Link to="/PythonAssignments">C++Asignments</Link>
          <Link to="/PythonAssignments">C++Tests</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Main Content Container */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/PythonAssignments" element={<PythonAssignments />} />
            <Route path="/about" element={<About />} /> {/* Route for About Page */}
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          Page created by Mahsa Abbasian. All rights reserved © 2024
          <br />
          <a href="mailto:your-email@example.com">Contact Email</a> |
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </footer>
      </div>
    </Router>
  );
};

export default App;

