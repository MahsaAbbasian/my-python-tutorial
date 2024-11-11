// src/pages/About.js
import React from 'react';
import '../style.css';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Me</h1>
      <h2>Mahsa Abbasian</h2>
      <h3>Software Engineer</h3>

      <p>
        I am a highly skilled Software Engineer with over 8 years of experience in software
        development, specializing in Erlang, Golang, C++ and Python. I have a proven track record of designing,
        developing, and maintaining high-quality software solutions within cross-functional agile teams.
        I am passionate about continuous learning and always eager to adopt the latest technologies to
        improve existing systems.
      </p>

      <h2>Skills and Expertise</h2>
      <h3>Programming Languages:</h3>
      <ul>
        <li><strong>C++:</strong> Expert in object-oriented design, memory management, multithreading, and algorithm optimization.</li>
        <li><strong>Python:</strong> Proficient in scripting, automation, and data analysis. Skilled in libraries like NumPy, pandas, and Tkinter for GUI development.</li>
        <li><strong>Additional Languages:</strong> Erlang, Golang, HTML, CSS, JavaScript, React, Kotlin.</li>
      </ul>

      <h3>Frameworks & Libraries:</h3>
      <ul>
        <li><strong>C++:</strong> OpenCV, STL, Qt for GUI development.</li>
        <li><strong>Python:</strong> Flask, Django, NumPy, pandas, Tkinter.</li>
      </ul>

      <h3>Tools & Technologies:</h3>
      <p>
        Docker, Kubernetes, Microservices, Jenkins, Git, Eclipse, Visual Studio, Google Colab,
        Android Studio, PyCharm, Confluence, and more.
      </p>

      <h3>Development Methodologies:</h3>
      <p>Agile, Scrum, Test-Driven Development (TDD), Continuous Integration (CI), Integration Testing.</p>

      <h2>Professional Experience</h2>
      <h3>HiQ (Software Engineer) - 2023 to 2024:</h3>
      <ul>
        <li>Worked in an agile framework, contributing to code writing, code review, and team collaboration.</li>
        <li>Managed team engagement, organized workshops, and developed a Python-based vocabulary learning app using Tkinter and Firebase.</li>
      </ul>

      <h3>Ericsson (Software Engineer) - 2017 to 2023:</h3>
      <ul>
        <li>Focused on agile development for Radio and Network sections, transitioned projects from C++ to Golang.</li>
        <li>Developed and deployed Python tools for automation, conducted tests, and implemented algorithmic solutions.</li>
        <li>Worked on Erlang projects, performing functional testing and maintaining build processes for 5G networks.</li>
      </ul>

      <h3>University of Gothenburg (Teacher Assistant) - 2015 to 2017:</h3>
      <ul>
        <li>Assisted in programming self-driving miniature cars, teaching advanced C++ techniques and integrating with hardware systems.</li>
      </ul>

      <h2>Education</h2>
      <p>
        <strong>Bachelor in Software Engineering (2013 - 2016)</strong><br />
        University of Gothenburg, Sweden<br />
        Key Courses: Software Architecture, Embedded Systems, Test and Verification, Data Structures, and Model-Based Test Case Generation.
      </p>

      <h2>Projects & Publications</h2>
      <ul>
        <li>Desktop Application Programming with Java (2014)</li>
        <li>Software Architecture for Distributed Systems (2015)</li>
        <li>Bachelor Thesis: Efficiency of Model-Based Test Case Generation Using the HSI Method (2016)</li>
      </ul>

      <h2>Languages</h2>
      <ul>
        <li><strong>Azerbaijani:</strong> Upper-intermediate</li>
        <li><strong>English:</strong> Fluent</li>
        <li><strong>Swedish:</strong> Basic proficiency</li>
        <li><strong>Turkish:</strong> Upper-intermediate</li>
        <li><strong>Persian:</strong> Native</li>
      </ul>

      <h2>Personal Interests</h2>
      <p>
        I enjoy cultural activities with family and friends, movie nights, playing volleyball, swimming, and staying fit through Pilates.
        I am also an art and culture teacher for children in the Persian community, fostering creativity and cultural awareness.
      </p>

      <h2>Connect With Me</h2>
      <p>
        <strong>Email:</strong> mahsa.abbasian@outlook.com<br />
        <strong>LinkedIn:</strong> Mahsa Abbasian
      </p>
    </div>
  );
};

export default About;
