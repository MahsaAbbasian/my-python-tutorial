// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => {
  return (
    // Use only one container div for the main content
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Programming Practice Hub!</h1>
      <p>
        Our goal is to provide you with hands-on programming assignments and
        tutorials in Python and C++ to help you become a proficient developer.
        Programming isn't just about understanding theoretical concepts; it's
        about applying those concepts to solve real-world problems. By practicing
        with real code and working through practical projects, you'll develop the
        skills necessary to write efficient and effective programs.
      </p>
      <p>
        Here, you'll find a range of carefully crafted projects and tests designed
        to challenge your problem-solving abilities and deepen your understanding
        of core programming principles. Whether you are a beginner looking to
        grasp the basics or an experienced coder aiming to sharpen your skills,
        this platform has something for everyone.
      </p>

      <h2>Why Practice Programming?</h2>
      <p>
        Consistent practice is key to mastering programming concepts. Reading
        about programming or watching tutorials can only take you so far. It's
        through writing code, encountering bugs, and figuring out solutions that
        you truly learn. By building projects and solving assignments, you gain
        hands-on experience that reinforces your knowledge and boosts your
        confidence.
      </p>
      <p>
        Programming projects simulate real-world challenges, helping you understand
        how to design algorithms, structure your code efficiently, and handle
        unexpected scenarios. Additionally, solving diverse problems enhances your
        logical thinking and equips you with a versatile set of skills that you
        can apply across various domains, from web development to data analysis.
      </p>

      <h2>What’s Available?</h2>
      <p>
        On this website, you'll find dedicated sections for:
        <ul>
          <li><strong>Python Assignments:</strong> Projects and exercises designed to help you
          build a strong foundation in Python, covering concepts from basic syntax to GUI development.</li>
          <li><strong>Python Tests:</strong> Quizzes and coding challenges to assess your
          Python knowledge and ensure you're ready to move on to more complex topics.</li>
          <li><strong>C++ Assignments:</strong> Hands-on projects that focus on C++ concepts
          like object-oriented programming, data structures, and algorithms.</li>
          <li><strong>C++ Tests:</strong> A series of tests to evaluate your understanding of
          C++ and prepare you for real-world software development challenges.</li>
        </ul>
        Each section is designed to challenge and improve your coding abilities.
      </p>

      <h2>Explore Our Sections</h2>
      <div className="button-container">

        <Link to="/PythonAssignments" className="box">python Assignments</Link>
        <Link to="/python-tests" className="box">Python Tests</Link>
        <Link to="/cpp-assignments" className="box">C++ Assignments</Link>
        <Link to="/cpp-tests" className="box">C++ Tests</Link>
      </div>
    </div>
  );
};

export default Home;

