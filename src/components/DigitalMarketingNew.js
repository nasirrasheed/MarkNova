import React from "react";
import "./DigitalMarketingNew.css";

const services = [
  { title: "Google & Meta Ads", icon: "📈" },
  { title: "E-commerce Store Management", icon: "🛒" },
  { title: "Amazon PPC Optimization", icon: "🎯" },
  { title: "Dropshipping & Wholesale", icon: "🚚" },
  { title: "Local Business Growth", icon: "🏠" },
  { title: "Analytics & Strategy", icon: "📊" }
];

const industriesLeft = [
  "Real Estate", "Restaurants", "Fashion Brands", "Fitness Coaches"
];
const industriesRight = [
  "Dropshipping Sellers", "Wholesale Distributors", "Beauty & Salons", "Local Services"
];

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png"
];

const DigitalMarketingNew = () => (
  <main className="dmk-main-container">
    {/* Hero */}
    <section className="dmk-hero">
      <h1 className="dmk-hero-title">Grow Any Business. Anywhere.</h1>
      <p className="dmk-hero-subtext">
        From global eCommerce to local real estate — we’ve scaled 50+ brands with performance marketing across Google, Meta & Amazon.
      </p>
      <a
        href="https://wa.me/923359112095"
        target="_blank"
        rel="noopener noreferrer"
        className="dmk-cta-btn"
      >
        🚀 Get Free Growth Plan
      </a>
    </section>

    {/* Services */}
    <section className="dmk-services-section">
      <h2 className="dmk-section-heading">Our Services</h2>
      <div className="dmk-services-grid">
        {services.map((item, i) => (
          <div key={i} className="dmk-service-card">
            <span className="dmk-service-icon">{item.icon}</span>
            <span className="dmk-service-title">{item.title}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Seen In Slider */}
    <section className="dmk-seenin-section">
      <h2 className="dmk-section-heading">As Seen In</h2>
      <div className="dmk-slider-wrapper">
        <div className="dmk-slider-track">
          {partnerIcons.concat(partnerIcons).map((icon, i) => (
            <div className="dmk-slider-logo" key={i}>
              <img src={icon} alt="Partner Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries We Help */}
    <section className="dmk-industries-section">
      <h2 className="dmk-section-heading">Industries We Help</h2>
      <div className="dmk-industries-flex">
        <div className="dmk-industries-block">
          {industriesLeft.map((ind, i) => (
            <div className="dmk-industry-item" key={i}>{ind}</div>
          ))}
        </div>
        <div className="dmk-industries-block">
          {industriesRight.map((ind, i) => (
            <div className="dmk-industry-item" key={i}>{ind}</div>
          ))}
        </div>
      </div>
    </section>
    {/* Floating WhatsApp Button */}
    {/* <a
      href="https://wa.me/923359112095"
      target="_blank"
      rel="noopener noreferrer"
      className="dmk-whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon, matching homepage style */}
      {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#25d366"/>
        <path d="M34.6 28.7c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.4-.5.6-.8.2-.3.2-.5.3-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.3-3-.3-.7-.7-.6-1-.6-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8 0 2.2 1.7 4.3 2 4.6.2.3 3.3 5.1 8.1 6.7 1.1.4 2 .6 2.7.8 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" fill="#fff"/>
      </svg>
    </a> */} 
  </main>
);

export default DigitalMarketingNew;
const partnerIcons = [
  "/icons/Beauty.png",
  "/icons/Circular.png",
  "/icons/Urban.png",
  "/icons/Nine.png",
  "/icons/Saree.png",
  "/icons/Clothing.png",
  "/icons/Ego.png",
  "/icons/Lion.png",
  "/icons/Interior.png"
];