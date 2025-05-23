import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";


const portfolioImages = [
  { img: "/portfolio/zuvasheabutter.png", title: "Fashion Store" },
  { img: "/portfolio/RealEstate.png", title: "Real Estate" },
  { img: "/portfolio/orliani.png", title: "Restaurant" },
  { img: "/portfolio/Coaching.png", title: "Coach Landing" },
 
  { img: "/portfolio/Dentist.png", title: "Dentist" },
  { img: "/portfolio/HealthCare.png", title: "HealthCare" },
  {img: "/portfolio/resturants-a.png", title: "Restaurant" },
  {img: "/portfolio/resturants-b.png", title: "Restaurant" },
  {img: "/portfolio/resturant-c.png", title: "Restaurant" },
  {img: "/portfolio/resturant-d.png", title: "Restaurant" },
  {img: "/portfolio/dentist-a.png", title: "Dentist" },
  {img: "/portfolio/dentist-b.png", title: "Dentist" },
  {img: "/portfolio/dentist-c.png", title: "Dentist" },
  {img: "/portfolio/dentist-d.png", title: "Dentist" },
  {img: "/portfolio/fitness-a.png", title: "Fitness" },
  {img: "/portfolio/fitness-b.png", title: "Fitness" },
  {img: "/portfolio/fitness-c.png", title: "Fitness" },
  {img: "/portfolio/fitness-d.png", title: "Fitness" },
  {img: "/portfolio/fitness-e.png", title: "Fitness" },

  // Add more images as needed
];

function Portfolio() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    
    <main className="portfolio-main">
     
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
 
      </>
    </main>
  );
}

export default Portfolio;