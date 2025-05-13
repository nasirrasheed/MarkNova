import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-bg-animate"></div>
      <h2 className="contact-title">
        <span className="ai-gradient">Get In Touch</span>
      </h2>
      
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>Satellite Town Street No 7, SadiqAbad</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <span>contact@marknova.com</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <span>+92 335 911 2095</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;