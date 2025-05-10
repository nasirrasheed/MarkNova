import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Services from "./components/Services";
import Story from "./components/Story";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Home />
      <Services />
      <Story />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton phone="923359112095" />
    </div>
  );
}

export default App;
