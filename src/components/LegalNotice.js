import React from "react";
import { motion } from "framer-motion";
import "./LegalNotice.css";

function LegalNotice() {
  return (
    <motion.div
      className="legal-notice-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="legal-notice-card">
        <h1 className="legal-notice-title">Legal Notice</h1>
        <p className="legal-notice-contact">
          <strong>MarkNova</strong><br />
          Address: Satellite Town SadiqAbad, Pakistan<br />
          Email: <a href="mailto:contact@marknova.agency">contact@marknova.agency</a><br />
          Phone: <a href="tel:+923359112095">+92 335 9112095</a>
        </p>
        <h2>Responsible for Content</h2>
        <p>
          CEO of MarkNova Muhammad Nasir Rasheed<br />
          Satellite Town SadiqAbad, Pakistan<br />
        </p>
        <h2>Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Site.
        </p>
        <h2>Copyright</h2>
        <p>
          All content and works published on this website are governed by copyright laws. Any duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
        </p>
      </div>
    </motion.div>
  );
}

export default LegalNotice;