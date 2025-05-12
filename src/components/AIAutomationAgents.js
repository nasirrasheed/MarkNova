import React from "react";
import { motion } from "framer-motion";
import "./AIAutomationAgents.css";

const services = [
  {
    icon: "🤖",
    title: "Custom AI Agents",
    desc: "Automate repetitive tasks and workflows with intelligent, tailored AI agents."
  },
  {
    icon: "📈",
    title: "Business Process Automation",
    desc: "Streamline operations, reduce costs, and boost productivity with smart automation."
  },
  {
    icon: "💬",
    title: "AI Chatbots & Virtual Assistants",
    desc: "Enhance customer support and engagement with 24/7 conversational AI."
  },
  {
    icon: "🔗",
    title: "API & System Integrations",
    desc: "Connect your tools and platforms for seamless, automated data flow."
  }
];

const industries = [
  { icon: "🏥", name: "Healthcare" },
  { icon: "🛒", name: "eCommerce" },
  { icon: "💼", name: "B2B Services" },
  { icon: "🏦", name: "Finance" },
  { icon: "🏢", name: "Real Estate" },
  { icon: "🎓", name: "Education" }
];

function AIAutomationAgents() {
  return (
    <main className="aiagents-main-container">
      {/* Hero Section */}
      <section className="aiagents-hero">
        <motion.h1
          className="aiagents-hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Supercharge Your Business with AI Automation Agents
        </motion.h1>
        <motion.p
          className="aiagents-hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We design, build, and deploy intelligent automation agents that save you time, cut costs, and unlock new growth.
        </motion.p>
        <motion.a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="aiagents-cta-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.07 }}
          whileHover={{ scale: 1.13, boxShadow: "0 8px 32px #00fff788" }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        >
          🚀 Get Free Automation Consultation
        </motion.a>
      </section>

      {/* How AI Agents Work & How We Work Together as Cards */}
      <section className="aiagents-info-section">
        <div className="aiagents-info-cards">
          <motion.div
            className="aiagents-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="aiagents-section-heading">How Our AI Agents Work</h2>
            <p>
              Our AI automation agents are custom-built software solutions that use artificial intelligence to handle repetitive tasks, process data, interact with customers, and integrate with your existing tools. Whether it's automating emails, managing data entry, or providing instant customer support, our agents work 24/7 to boost your efficiency and accuracy.
            </p>
          </motion.div>
          <motion.div
            className="aiagents-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="aiagents-section-heading">How We’ll Work Together</h2>
            <ol>
              <li><strong>Discovery:</strong> We discuss your business needs and identify automation opportunities.</li>
              <li><strong>Proposal:</strong> You receive a clear plan and timeline for your custom AI solution.</li>
              <li><strong>Development:</strong> Our team builds and tests your AI agent, keeping you updated at every step.</li>
              <li><strong>Deployment:</strong> We integrate the agent into your workflow and provide full support and training.</li>
              <li><strong>Growth:</strong> We monitor performance and help you scale automation as your business grows.</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="aiagents-services-section">
        <h2 className="aiagents-section-heading">What We Automate</h2>
        <div className="aiagents-services-grid">
          {services.map((service, i) => (
            <motion.div
              className="aiagents-service-card"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="aiagents-service-icon">{service.icon}</span>
              <span className="aiagents-service-title">{service.title}</span>
              <span className="aiagents-service-desc">{service.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="aiagents-industries-section">
        <h2 className="aiagents-section-heading">Industries We Serve</h2>
        <div className="aiagents-industries-grid">
          {industries.map((ind, i) => (
            <motion.div
              className="aiagents-industry-card"
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="aiagents-industry-icon">{ind.icon}</span>
              <span className="aiagents-industry-title">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiagents-finalcta-section">
        <motion.h2
          className="aiagents-finalcta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to Automate?
        </motion.h2>
        <motion.p
          className="aiagents-finalcta-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let’s build your custom AI automation agent — for any business, any workflow.
        </motion.p>
        <motion.a
          href="https://wa.me/923359112095"
          target="_blank"
          rel="noopener noreferrer"
          className="aiagents-finalcta-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1.07 }}
          whileHover={{ scale: 1.13, boxShadow: "0 8px 32px #00fff788" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          Chat Now
        </motion.a>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923359112095"
        className="aiagents-whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp" />
      </a>
    </main>
  );
}

export default AIAutomationAgents;