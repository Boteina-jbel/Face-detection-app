import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <h2>Contact Us</h2>
      
      <section className="contact-section" id="contact">
  <div className="contact-container">

    <div className="contact-content">

      <div className="contact-form">
        <p>
          Feel free to reach out if you have any questions or need advice
          regarding your skin! Your skin health is important, and I'm here to
          help. Whether you're curious about skincare routines, product
          recommendations, or specific concerns, don't hesitate to get in touch.
        </p>
        <p style={{ marginTop: "-10px" }}>
          Looking forward to assisting you on your skincare journey!
        </p>
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
</section>

    </div>
  );
};

export default Contact;
