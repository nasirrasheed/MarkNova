import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these URLs with real logo images in the future
const partners = [
  { name: "Brand One", logo: "/icons/Beauty.png" },
  { name: "Brand Two", logo: "/icons/Circular.png" },
  { name: "Brand Three", logo: "/icons/Urban.png" },
  { name: "Brand Four", logo: "/icons/Nine.png" },
  { name: "Brand Five", logo: "/icons/Saree.png" },
  { name: "Brand six", logo: "/icons/Clothing.png" },
  { name: "Brand Five", logo: "/icons/Ego.png" },
  { name: "Brand Five", logo: "/icons/Lion.png" },
  { name: "Brand Five", logo: "/icons/Interior.png" },
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
        <span>Serving Since 2020</span>
      </div>
    </section>
  );
}

export default Partners;
