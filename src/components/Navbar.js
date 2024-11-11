// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/PythonAssignments">pythonAsignments</Link>
    <Link to="/PythonAssignments">pythonTests</Link>
    <Link to="/PythonAssignments">C++Asignments</Link>
    <Link to="/PythonAssignments">C++Tests</Link>
    <Link to="/about">About</Link>
  </nav>
  );
};

export default Navbar;
