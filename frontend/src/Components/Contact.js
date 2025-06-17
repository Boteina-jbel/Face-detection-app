import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form">
            <p>Looking forward to assisting you on your skincare journey!</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className="sticky-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
