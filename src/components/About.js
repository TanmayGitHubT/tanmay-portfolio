import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-right">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm Tanmay, a passionate Software Engineer and Full Stack Developer currently pursuing a degree in Computer Science with a specialization in AI & ML at Chandigarh University.
          <br /><br />
          I love crafting elegant web experiences, solving algorithmic challenges, and exploring deep learning and NLP systems. With hands-on projects in IoT, cybersecurity, and data science, I blend theory with real-world impact.
          <br /><br />
          When I'm not coding, I'm probably brainstorming startup ideas or mentoring peers on tech!
        </p>
      </div>

      <div className="about-image">
        <img src="https://via.placeholder.com/350" alt="Tanmay" />
      </div>
    </section>
  );
}

export default About;
