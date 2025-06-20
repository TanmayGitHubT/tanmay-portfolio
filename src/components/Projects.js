import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Smart Parking Management System",
    description: "IoT + Web-based system that manages parking using RFID sensors for recognized/unrecognized vehicles.",
    tech: "HTML, CSS, JavaScript, Node.js, MongoDB, IoT (RFID)",
    demoLink: "smart-parking-new.vercel.app", // Replace with real link
    githubLink: "#"
  },
  {
    title: "Customer Lifetime Value Prediction",
    description: "ML model to identify high/low value customers based on behavior and purchase patterns.",
    tech: "Python, Pandas, scikit-learn, Matplotlib",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Phishing Detection System",
    description: "A classifier that identifies phishing URLs using NLP and machine learning techniques.",
    tech: "Python, Flask, NLTK, Scikit-learn",
    demoLink: "#",
    githubLink: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section" data-aos="zoom-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <p className="tech"><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={"smart-parking-new.vercel.app"} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
