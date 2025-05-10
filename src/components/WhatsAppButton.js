import React from 'react';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phone }) => {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.441 8.892c-2.384-.142-4.519.375-6.441 1.558-1.922-1.183-4.057-1.7-6.441-1.558-2.309.137-4.843 1.522-4.843 5.108 0 1.129.159 2.349.477 3.658C4.537 21.346 4 23.5 4 25.5l.008.077c.179.771.75 1.423 1.5 1.423h.5c1.5 0 2.5-1 3.5-2 1.083.833 2.167 1.5 3.5 1.5h.5c.75 0 1.321-.652 1.5-1.423l.008-.077c0-2 .537-4.154 1.635-5.842.318-1.309.477-2.529.477-3.658 0-3.586-2.534-4.971-4.843-5.108zM10 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;