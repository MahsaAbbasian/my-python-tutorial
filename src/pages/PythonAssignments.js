import React from 'react';
import { Link } from 'react-router-dom';
import FileRenaming from './assignmentPython/FileRenaming';
import FileConversion from './assignmentPython/Conver_doc_to_pdf'


const PythonAssignments = () => {
  return (
    <div style={{ padding: '20px' }}>

<h2>What is a Script?</h2>
      <h3>General Definition:</h3>
      <p>
        A script is a file that contains a sequence of instructions written in a programming or
        scripting language. It’s typically used to automate tasks, perform calculations, or
        execute a specific sequence of operations.
      </p>
      <h3>Scripts vs. Programs:</h3>
      <p>
        In programming, the term "script" often refers to smaller, simpler programs designed to
        automate tasks or run a specific routine, while a "program" might be a larger, more
        complex piece of software.
      </p>

      <h2>What is a Script in Python?</h2>
      <h3>Python Script:</h3>
      <p>
        A Python script is simply a file containing Python code, usually with a .py extension,
        that can be executed by the Python interpreter.
      </p>

      <h3>Examples of Python Scripts:</h3>
      <ul>
        <li>Automating tasks, like renaming files or sending emails.</li>
        <li>Performing data analysis or automating web scraping.</li>
        <li>Running simple calculations or simulations.</li>
      </ul>

      <h3>Structure:</h3>
      <p>
        A typical Python script might include imports, function definitions, and a main
        execution block like this:
      </p>
      <pre className="code-block">
        {`# example.py
import math

def calculate_area(radius):
    return math.pi * radius ** 2

if __name__ == "__main__":
    print("Area of circle:", calculate_area(5))`}
      </pre>
      <p>
        Here, the script imports a module (math), defines a function (calculate_area), and uses
        the <code>if __name__ == "__main__"</code> block to run code only when the script is
        executed directly.
      </p>

      <h2>Why Use Scripts in Python?</h2>
      <ul>
        <li><strong>Automate Repetitive Tasks:</strong> Scripts are great for automating tasks you do frequently.</li>
        <li><strong>Prototyping and Quick Solutions:</strong> Quickly write code to solve problems or test ideas.</li>
        <li><strong>Data Analysis and Visualization:</strong> Used by data scientists for processing and analysis.</li>
        <li><strong>Simplicity and Readability:</strong> Easy to write and understand, perfect for beginners and experts.</li>
        <li><strong>System Administration:</strong> Automate system tasks like monitoring or managing files.</li>
      </ul>

      <h2>When to Use a Python Script:</h2>
      <ul>
        <li><strong>For Small to Medium Projects:</strong> Ideal for tasks that don’t need a full application.</li>
        <li><strong>Automation:</strong> Great for automating repetitive tasks.</li>
        <li><strong>Data Processing:</strong> Widely used for cleaning and transforming datasets.</li>
        <li><strong>Learning and Experimentation:</strong> Excellent way to learn Python or test ideas.</li>
      </ul>
      <h2>General Automation Related Section </h2>
      {/* Corrected Link Component */}
      <div className="button-container">
    
      <Link to="/assignmentPython/FileRenaming" className="box">
      Python script Toward File Renaming Assignment 
      </Link>
      <Link to="/assignmentPython/convert_doc_to_pdf" className="box">        
      Python script to convert a .doc file to a .pdf  Assignment        
      </Link>
      </div>
    </div>
  );
};

export default PythonAssignments;
