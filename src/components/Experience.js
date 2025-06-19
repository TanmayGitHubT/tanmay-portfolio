import React from 'react';
import './Experience.css';

const experienceData = [
  {
    year: "2025",
    role: "Software Engineer Intern",
    company: "Cisco India Private Limited",
    description: "Worked on container orchestration with Kubernetes and developed microservices using Node.js and Docker."
  },
  {
    year: "2024",
    role: "Software Developer Intern",
    company: "Cognifyz Technologies",
    description: "Built internal tools, implemented REST APIs, and contributed to code optimization in a full-stack JavaScript environment."
  },
  {
    year: "2023",
    role: "Sales & Communication Intern",
    company: "Younity Pvt. Ltd.",
    description: "Developed communication strategies, improved outreach pipelines, and strengthened public engagement skills."
  },
  {
    year: "2022",
    role: "AI & ML Student",
    company: "Chandigarh University",
    description: "Pursuing B.E. CSE (AI & ML) with practical exposure in deep learning, NLP, and data science."
  }
];

function Experience() {
  return (
    <section id="resume" className="experience-section" data-aos="fade-up">
      <h2 className="section-title">Experience Timeline</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.role} @ <span>{item.company}</span></h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
