import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import DigitalMarketingNew from "./components/DigitalMarketingNew";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import AIAutomationAgents from "./components/AIAutomationAgents";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Story from "./components/Story";
import LegalNotice from "./components/LegalNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";
import WhatsAppButton from "./components/WhatsAppButton"; // <-- Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-black text-white min-h-screen" style={{ paddingTop: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/story" element={<Story />} />
          <Route path="/services" element={<Services />} />
          <Route path="/digital-marketing-new" element={<DigitalMarketingNew />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/ai-automation-agents" element={<AIAutomationAgents />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <WhatsAppButton phone="923359112095" /> {/* <-- Add this line */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;
