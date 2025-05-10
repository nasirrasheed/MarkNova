import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these URLs with real logo images in the future
const partners = [
  { name: "Brand One", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Brand Two", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" },
  { name: "Brand Three", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Brand Four", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { name: "Brand Five", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
];

function Partners() {
  const settings = {
    dots: false,
    arrows: false, // Hide arrows
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="partners-section">
      <h2 className="partners-title">
        <span className="ai-gradient">Our Future Partners</span>
      </h2>
      <Slider {...settings} className="partners-logos">
        {partners.map((partner, idx) => (
          <div className="partner-logo-img" key={partner.name}>
            <img src={partner.logo} alt={partner.name} className="logo-img" />
          </div>
        ))}
      </Slider>
      <div className="partners-note">
        <span>We’re excited to add real brands soon!</span>
      </div>
    </section>
  );
}

export default Partners;
