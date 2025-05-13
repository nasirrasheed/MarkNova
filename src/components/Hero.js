import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import "./Home.css"
function Hero() {
  return (
  <div className="hero-sec">
    <section className="hero-content glass">
      <motion.img
        src={process.env.PUBLIC_URL + "/Websitelogo.png"}
        alt="AI Digital Agent"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title floating"
      >
        MarkNova
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hero-subtitle floating"
      >
        <span className="ai-gradient">AI-Powered Digital Brilliance</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hero-desc floating"
      >
        <span className="hero-highlight">Websites</span>, <span className="hero-highlight">AI Automations</span>, and <span className="hero-highlight">Digital Marketing</span> that <span className="ai-gradient">elevate your business</span>.<br />
        <span className="hero-trust">Trusted by 200+ global brands. Let’s build your future.</span>
      </motion.p>
      <motion.a
        href="https://wa.me/923359112095"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.07 }}
        whileHover={{ scale: 1.13, boxShadow: "0 8px 32px #00fff788" }}
        transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        className="hero-btn floating"
      >
        <span className="hero-btn-glow"></span>
        <span className="hero-btn-text">🚀 Get Your AI Strategy Now</span>
      </motion.a>
      <div className="divider-animated"></div>
      <motion.div
        className="hero-badges"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <span className="badge">
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#00ffb8"/><path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          200+ Happy Clients
        </span>
        <span className="badge">
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#7f5cff"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          5-Star Google Reviews
        </span>
        <span className="badge">
          <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#00cfff"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Lightning Fast Delivery
        </span>
      </motion.div>
    </section>
    </div>
  );
}

export default Hero;