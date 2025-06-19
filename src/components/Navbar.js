import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Tanmay</div>

      <ul className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}>
        <li><a href="#hero" onClick={() => setIsMobile(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsMobile(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsMobile(false)}>Skills</a></li>
        <li><a href="#resume" onClick={() => setIsMobile(false)}>Resume</a></li>
        <li><a href="#contact" onClick={() => setIsMobile(false)}>Contact</a></li>
      </ul>

      <button className="menu-icon" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
