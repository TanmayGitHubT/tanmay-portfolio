import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree link later
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
