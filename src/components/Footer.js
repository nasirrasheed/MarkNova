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
              href="/services" 
              variants={linkVariants}
              whileHover="hover"
            >Services</motion.a>
            <motion.a 
              href="/Story"
              variants={linkVariants}
              whileHover="hover"
            >Our Story</motion.a>
            <motion.a 
              href="/testimonials"
              variants={linkVariants}
              whileHover="hover"
            >Testimonials</motion.a>
            <motion.a 
              href="/portfolio"
              variants={linkVariants}
              whileHover="hover"
            >Portfolio</motion.a>
           
          </div>
          
          <div className="link-column">
            <h4>Legal</h4>
            <motion.a 
              href="/privacy-policy"
              variants={linkVariants}
              whileHover="hover"
            >Privacy Policy</motion.a>
            <motion.a 
              href="/legal-notice"
              variants={linkVariants}
              whileHover="hover"
            >Legal Notice</motion.a>
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
            <motion.a
              href="https://www.instagram.com/pupcare.de/"
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              whileHover="hover"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
            >
              <span>Instagram</span>
              <svg width="22" height="22" viewBox="0 0 448 512" fill="#ff00cc" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,120,256,118.13,224,118.13s-69.19,1.87-94.35,13.17a54,54,0,0,0-30.36,30.36C120,162.81,118.13,200,118.13,232s1.87,69.19,13.17,94.35a54,54,0,0,0,30.36,30.36C162.81,392,200,393.87,232,393.87s69.19-1.87,94.35-13.17a54,54,0,0,0,30.36-30.36C392,293.19,393.87,256,393.87,224S392,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4ZM398.8,80A80,80,0,0,0,368,51.2C347.2,32,320.8,32,224,32S100.8,32,80,51.2A80,80,0,0,0,51.2,80C32,100.8,32,127.2,32,224s0,123.2,19.2,144A80,80,0,0,0,80,460.8C100.8,480,127.2,480,224,480s123.2,0,144-19.2a80,80,0,0,0,28.8-28.8C480,347.2,480,320.8,480,224S480,100.8,460.8,80ZM432,224c0,93.1-1.9,112.9-13.1,124.1S317.1,432,224,432,81.1,430.1,69.9,418.9,32,317.1,32,224,33.9,81.1,45.1,69.9,130.9,32,224,32s142.9,1.9,154.1,13.1S432,130.9,432,224Z"/>
              </svg>
            </motion.a>
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