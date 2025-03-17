import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or suggestions, feel free to reach out to us.</p>

      <div className="contact-info">
        <p>📩 <strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>🌐 <strong>Website:</strong> <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">your-website.com</a></p>
        <p>📍 <strong>Location:</strong> Your City, Country</p>
      </div>

      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="#" target="_blank" rel="noopener noreferrer"> Facebook</a> |
        <a href="#" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>

      <h3>Need Help?</h3>
      <p>Fill out our contact form, and we’ll get back to you as soon as possible!</p>
    </div>
  );
};

export default Contact;
