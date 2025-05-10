import React from "react";
import { motion } from "framer-motion";
import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  const services = [
    { title: "Google & Meta Ads", icon: "📈" },
    { title: "E-commerce Store Management", icon: "🛒" },
    { title: "Amazon PPC Optimization", icon: "🎯" },
    { title: "Dropshipping & Wholesale", icon: "🚚" },
    { title: "Local Business Growth", icon: "🏠" },
    { title: "Analytics & Strategy", icon: "📊" }
  ];

  const industries = [
    "Real Estate", "Restaurants", "Fashion Brands", "Fitness Coaches",
    "Dropshipping Sellers", "Wholesale Distributors", "Beauty & Salons", "Local Services"
  ];

  return (
    <main className="digital-marketing-container">
      {/* Hero */}
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Grow Any Business. Anywhere.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-subtext"
        >
          From global eCommerce to local real estate — we’ve scaled 50+ brands with performance marketing across Google, Meta & Amazon.
        </motion.p>
        <a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          🚀 Get Free Growth Plan
        </a>
      </section>

      {/* Services */}
      <section className="services-section">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="service-box"
          >
            <div className="service-icon">{item.icon}</div>
            <h3 className="service-title">{item.title}</h3>
          </motion.div>
        ))}
      </section>

      {/* Results */}
      <section className="results-section">
        <h2 className="section-heading">Real Results</h2>
        <div className="results-grid">
          <div>✅ 13+ Amazon FBA Brands Scaled</div>
          <div>✅ 40+ Shopify Stores Managed</div>
          <div>✅ $2M+ in Ad Revenue</div>
          <div>✅ Clients in 10+ Countries</div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section">
        <h2 className="section-heading">Industries We Help</h2>
        <div className="industries-grid">
          {industries.map((industry, i) => (
            <div key={i} className="industry-box">{industry}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-heading">Ready to Scale?</h2>
        <p className="cta-text">
          Let us craft a custom marketing strategy for your brand — no matter the size or niche.
        </p>
        <a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          📞 Talk to an Expert
        </a>
      </section>
    </main>
  );
};

export default DigitalMarketing;
