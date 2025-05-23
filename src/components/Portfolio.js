import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import { AgentBuilder } from "./AIAutomationAgents";

const portfolioImages = [
  { img: "/portfolio/zuvasheabutter.png", title: "Fashion Store" },
  { img: "/portfolio/RealEstate.png", title: "Real Estate" },
  { img: "/portfolio/orliani.png", title: "Restaurant" },
  { img: "/portfolio/Coaching.png", title: "Coach Landing" },
 
  { img: "/portfolio/Dentist.png", title: "Dentist" },
  { img: "/portfolio/HealthCare.png", title: "HealthCare" }
  // Add more images as needed
];

function Portfolio() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    
    <main className="portfolio-main">
       <section style={{ background: "#23234a", padding: "2rem 0" }}>
          <h2 style={{ color: "#00fff7", textAlign: "center", marginBottom: 32 }}>
            Design Your Agent in 3 Steps
          </h2>
          <AgentBuilder />
        </section>
      <h1 className="portfolio-title">Our Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioImages.map((site, idx) => (
          <motion.div
            className="portfolio-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <img src={site.img} alt={site.title} className="portfolio-img" />
            {/* <button
              className="portfolio-view-btn"
              onClick={() => openModal(site.img)}
              aria-label={`View ${site.title} full`}
            >
              <span className="portfolio-view-btn-icon">🔍</span>
            </button> */}
            <span className="portfolio-caption">{site.title}</span>
          </motion.div>
        ))}
      </div>
     
      {modalImg && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt="Full Preview" className="portfolio-modal-img" />
          </div>
        </div>
      )}
      <>
        {/* This will be the first section */}
       

        {/* Rest of your portfolio content */}
      </>
    </main>
  );
}

export default Portfolio;