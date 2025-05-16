import React from "react";
import { motion } from "framer-motion";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <motion.div
      className="privacy-policy-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="privacy-policy-card">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p>
          Your privacy is important to us. It is MarkNova's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, etc., when you contact us or use our services.
        </p>
        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to provide, operate, and maintain our website and services, improve your experience, and communicate with you.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          We may employ third-party companies and individuals due to the following reasons: to facilitate our service, to provide the service on our behalf, to perform service-related services, or to assist us in analyzing how our service is used.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us at <a href="mailto:contact@marknova.agency">contact@marknova.agency</a>.
        </p>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicy;