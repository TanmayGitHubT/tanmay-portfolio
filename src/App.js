import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Import here
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80,
  });
}, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      {/* Next: Projects, Skills, etc. */}
    </div>
  );
}

export default App;
