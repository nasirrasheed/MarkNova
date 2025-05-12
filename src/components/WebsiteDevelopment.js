import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WebsiteDevelopment.css";

// Technologies icons (replace with your SVGs or images as needed)
const techIcons = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Vue.js", icon: "/icons/vue.svg" },
  { name: "Nuxt.js", icon: "/icons/nuxt.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Shopify", icon: "/icons/shopify.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" }
];

// Portfolio thumbnails (replace with your images/links)
const portfolio = [
  { img: "/portfolio/site1.jpg", link: "https://site1.com", title: "Fashion Store" },
  { img: "/portfolio/site2.jpg", link: "https://site2.com", title: "Real Estate" },
  { img: "/portfolio/site3.jpg", link: "https://site3.com", title: "Coach Landing" },
  { img: "/portfolio/site4.jpg", link: "https://site4.com", title: "Restaurant" }
];

const whatWeDevelop = [
  { title: "Shopify Stores", icon: "🛒" },
  { title: "WooCommerce Sites", icon: "📦" },
  { title: "WordPress Business Websites", icon: "🖥️" },
  { title: "Custom-Coded Websites", icon: "💻" },
  { title: "React / Next.js SPAs", icon: "⚛️" },
  { title: "Vue / Nuxt.js Projects", icon: "🌐" },
  { title: "Portfolio & Landing Pages", icon: "🎨" },
  { title: "Booking, Real Estate, Restaurant Sites", icon: "🏠🍽️" }
];

const industries = [
  { title: "Fashion Brands", icon: "👗" },
  { title: "Real Estate", icon: "🏠" },
  { title: "Restaurants", icon: "🍔" },
  { title: "Coaches & Influencers", icon: "🎤" },
  { title: "Dropshipping Businesses", icon: "🚛" },
  { title: "Beauty & Salons", icon: "💅" },
  { title: "B2B Services", icon: "💼" },
  { title: "Startups", icon: "🚀" }
];

const highlights = [
  "✅ 80+ Shopify stores developed",
  "✅ 20+ Custom Web Apps",
  "✅ 10+ Countries served",
  "✅ 100% Satisfaction Rate"
];

const WebsiteDevelopment = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <main className="webdev-main-container">
      {/* Hero Section */}
      <section className="webdev-hero">
        {/* Add animated background with CSS/particles.js as desired */}
        <motion.h1
          className="webdev-hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Build Websites That Convert — For Any Business
        </motion.h1>
        <motion.p
          className="webdev-hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From Shopify to custom React apps, we craft lightning-fast, scalable, and modern websites for every industry.
        </motion.p>
        <motion.a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="webdev-cta-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.07 }}
          whileHover={{ scale: 1.13, boxShadow: "0 8px 32px #00fff788" }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        >
          Let’s Build Yours
        </motion.a>
      </section>

      {/* What We Develop */}
      <section className="webdev-what-section">
        <h2 className="webdev-section-heading">What We Develop</h2>
        <div className="webdev-what-grid">
          {whatWeDevelop.map((item, i) => (
            <motion.div
              key={item.title}
              className="webdev-what-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="webdev-what-icon">{item.icon}</span>
              <span className="webdev-what-title">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Technologies We Use */}
      <section className="webdev-tech-section">
        <h2 className="webdev-section-heading">Technologies We Use</h2>
        <div className="webdev-tech-grid">
          {techIcons.map((tech, i) => (
            <div className="webdev-tech-card" key={tech.name} title={tech.name}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Highlights */}
      <section className="webdev-highlights-section">
        <h2 className="webdev-section-heading">Client Success Highlights</h2>
        <div className="webdev-highlights-grid">
          {highlights.map((h, i) => (
            <div className="webdev-highlight-card" key={i}>
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="webdev-portfolio-section">
        <h2 className="webdev-section-heading">Portfolio Preview</h2>
        <div className="webdev-portfolio-grid">
          {portfolio.map((site, i) => (
            <div
              className="webdev-portfolio-card"
              key={site.title}
              onClick={() => setModalImg(site.img)}
              tabIndex={0}
              role="button"
              aria-label={`View ${site.title} full image`}
            >
              <img src={site.img} alt={site.title} />
              <span className="webdev-portfolio-title">{site.title}</span>
              <span className="webdev-portfolio-hover">View Live</span>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="webdev-portfolio-link"
        >
          View Full Portfolio →
        </a>
        {modalImg && (
          <div className="webdev-modal" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Portfolio Full Preview" className="webdev-modal-img" />
            <button className="webdev-modal-close" onClick={() => setModalImg(null)} aria-label="Close">&times;</button>
          </div>
        )}
      </section>

      {/* Industries We Serve */}
      <section className="webdev-industries-section">
        <h2 className="webdev-section-heading">Industries We Serve</h2>
        <div className="webdev-industries-grid">
          {industries.map((ind, i) => (
            <div className="webdev-industry-card" key={ind.title}>
              <span className="webdev-industry-icon">{ind.icon}</span>
              <span className="webdev-industry-title">{ind.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="webdev-finalcta-section">
        <h2 className="webdev-finalcta-title">Start Your Website Today</h2>
        <p className="webdev-finalcta-subtext">
          Let’s design your dream website — no matter the platform or industry.
        </p>
        <a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="webdev-finalcta-btn"
        >
          Chat Now
        </a>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923359112095"
        target="_blank"
        rel="noopener noreferrer"
        className="webdev-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#25d366"/>
          <path d="M34.6 28.7c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.4-.5.6-.8.2-.3.2-.5.3-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.3-3-.3-.7-.7-.6-1-.6-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8 0 2.2 1.7 4.3 2 4.6.2.3 3.3 5.1 8.1 6.7 1.1.4 2 .6 2.7.8 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" fill="#fff"/>
        </svg>
      </a>
    </main>
  );
};

export default WebsiteDevelopment;