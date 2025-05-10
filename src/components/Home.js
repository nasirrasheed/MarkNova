import React, { useEffect } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Story from "./Story";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsAppButton"; // Ensure this import is correct

function Home() {
  useEffect(() => {
    const poppins = document.createElement("link");
    poppins.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600;700&display=swap";
    poppins.rel = "stylesheet";
    document.head.appendChild(poppins);
    return () => document.head.removeChild(poppins);
  }, []);

  return (
    <main className="hero-main">
      <div className="hero-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <Hero />
      <Services />
      <Story />
      <Partners />
      <Testimonials />
      <Contact />
      <WhatsAppButton phone="923359112095" /> {/* Add the button here */}
    </main>
  );
}

export default Home;