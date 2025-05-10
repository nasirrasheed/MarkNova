import React, { useState } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initialReviews = [
  { name: "Alice", text: "Amazing service! Highly recommend MarkNova for any digital project." },
  { name: "Bob", text: "Professional, creative, and fast. My website looks incredible." },
  { name: "Charlie", text: "The automation solutions saved us hours every week. Thank you!" }
];

function Testimonials() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", text: "" });

  const settings = {
    dots: false, // Remove pagination
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.text.trim()) {
      setReviews([{ name: form.name, text: form.text }, ...reviews]);
      setForm({ name: "", text: "" });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-animate"></div>
      <h2 className="testimonials-title">
        <span className="ai-gradient">What People Say</span>
      </h2>
      <Slider {...settings} className="testimonials-slider">
        {reviews.map((review, idx) => (
          <div className="testimonial" key={idx}>
            <p className="testimonial-text">"{review.text}"</p>
            <div className="testimonial-name">— {review.name}</div>
          </div>
        ))}
      </Slider>
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={form.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Review</button>
      </form>
    </section>
  );
}

export default Testimonials;