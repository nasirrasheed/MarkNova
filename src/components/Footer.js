import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#ff00cc',
      textShadow: '0 0 10px #ff00cc',
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <motion.div 
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="ai-gradient">MarkNova</span>
        </motion.div>
        
        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <motion.a 
              href="#services" 
              variants={linkVariants}
              whileHover="hover"
            >Services</motion.a>
            <motion.a 
              href="#story"
              variants={linkVariants}
              whileHover="hover"
            >Our Story</motion.a>
            <motion.a 
              href="#testimonials"
              variants={linkVariants}
              whileHover="hover"
            >Testimonials</motion.a>
          </div>
          
          <div className="link-column">
            <h4>Legal</h4>
            <motion.a 
              href="/privacy"
              variants={linkVariants}
              whileHover="hover"
            >Privacy Policy</motion.a>
            <motion.a 
              href="/terms"
              variants={linkVariants}
              whileHover="hover"
            >Terms of Service</motion.a>
          </div>
          
          <div className="link-column">
            <h4>Connect</h4>
            <motion.a 
              href="mailto:contact@marknovadummy.com"
              variants={linkVariants}
              whileHover="hover"
            >Email Us</motion.a>
            <motion.a 
              href="tel:+923359112095"
              variants={linkVariants}
              whileHover="hover"
            >Call Us</motion.a>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} MarkNova. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;