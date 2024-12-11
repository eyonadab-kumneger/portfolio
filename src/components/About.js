import React from 'react';
import '../styles/About.css'; // Correct path for CSS file

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Eyonadab Kumneger, a passionate web developer who loves creating interactive and dynamic user interfaces. 
          With a focus on modern web technologies, I strive to build clean, maintainable, and scalable web applications.
        </p>
        <p>
          My journey in tech began with front-end development, and over time, I’ve gained experience working with a range of
          technologies like React, Node.js, java (spring boot), gitlab ci-cd, jenkins and more. I enjoy learning new frameworks, optimizing code, and staying up-to-date 
          with the latest trends in the development world.
        </p>
      </div>
    </section>
  );
}

export default About;
