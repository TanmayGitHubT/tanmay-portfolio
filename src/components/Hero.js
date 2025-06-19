import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Tanmay</span></h1>
        <h2>A Passionate Software Engineer</h2>
        <p>I specialize in full-stack web development, AI/ML, and building clean, modern UIs.</p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Hire Me</a>
          <a href="/Tanmay-Resume.pdf" download className="btn-secondary">Download Resume</a>
        </div>
      </div>
      <div className="hero-image">
        {/* Optional image here */}
        <img src="https://via.placeholder.com/300" alt="Tanmay" />
      </div>
    </section>
  );
}

export default Hero;
