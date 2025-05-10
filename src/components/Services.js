import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Digital Marketing",
    desc: "Grow your brand with data-driven campaigns, SEO, and social media mastery.",
    icon: (
      <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="24" fill="#7f5cff"/><path d="M16 32l16-16M32 32H16V16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Website Development",
    desc: "Stunning, high-converting websites built for speed, security, and scale.",
    icon: (
      <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="24" fill="#00fff7"/><path d="M16 32V16h16v16H16zm0 0l16-16" stroke="#181824" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "AI Automation Agents",
    desc: "Intelligent agents to automate your business workflows and boost productivity.",
    icon: (
      <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="24" fill="#ff00cc"/><path d="M24 16v16M16 24h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    comingSoon: true,
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">
        <span className="ai-gradient">Our Services</span>
      </h2>
      <div className="services-cards">
        {services.map((service, idx) => (
          <motion.div
            className={`service-card${service.comingSoon ? " coming-soon" : ""}`}
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {service.comingSoon && (
              <span className="soon-badge">Coming Soon</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;