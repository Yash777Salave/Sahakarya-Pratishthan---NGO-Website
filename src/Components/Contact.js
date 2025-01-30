import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navbar from "../../Navbar";
// import Footer from "../../Footer";
// import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below.</p>
        
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
