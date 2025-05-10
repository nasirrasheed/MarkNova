import React from "react";
import "./Story.css";

function Story() {
  return (
    <section className="story-section">
      <div className="story-content">
        <div className="story-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Futuristic AI Team"
            className="story-image"
          />
        </div>
        <div className="story-text">
          <h2 className="story-title">
            <span className="ai-gradient">Our Story</span>
          </h2>
          <p>
            MarkNova was born from a passion for innovation and a vision to empower businesses with the next generation of digital solutions. Our team blends creativity, technology, and AI to deliver <span className="highlight">exceptional websites</span>, <span className="highlight">intelligent automations</span>, and <span className="highlight">data-driven marketing</span>.<br /><br />
            We believe the future belongs to those who embrace change. That’s why we’re constantly evolving—launching AI-powered agents, automating workflows, and helping brands shine in the digital era.<br /><br />
            <span className="story-cta">Let’s build the future together.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;