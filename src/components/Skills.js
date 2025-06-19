import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiTensorflow, SiPostman, SiNumpy } from 'react-icons/si';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="icon react" /> },
      { name: "JavaScript", icon: <SiJavascript className="icon js" /> },
      { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
      { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
      { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
      { name: "Postman", icon: <SiPostman className="icon postman" /> },
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Python", icon: <FaPython className="icon python" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="icon tf" /> },
      { name: "NumPy", icon: <SiNumpy className="icon numpy" /> },
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="icon git" /> },
      { name: "Docker", icon: <FaDocker className="icon docker" /> },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-left">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div className="skill-category" key={index}>
            <h3>{group.category}</h3>
            <div className="skill-icons">
              {group.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
