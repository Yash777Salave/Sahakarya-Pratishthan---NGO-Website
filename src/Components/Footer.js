import React from "react";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.jpg";
const Footer = () => {
  return (
    <div style={{backgroundColor:'#000'}}>
    <div className="container" >
    <div className="footer-wrapper">
      <div className="footer-section-one">
      <div className="nav-logo-container">
        <img style={{width:86}} src={Logo} alt="" />
      </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About Us</span>
          <span>Our Vision and Mission</span>
          <span>Certified Ngo</span>
          <span>Team</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-section-columns">
          <span>Our Work</span>
          <span>Education</span>
          <span>Health</span>
          <span>Tree Plantation</span>
          <span>Water For Wildlife</span>
          <span>Donate Food</span>
          <span>Extra Activity</span>
        </div>
        <div className="footer-section-columns">
          <span>Get In Touch</span>
          <span>Contact Us</span>
          <span>News Section</span>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="footer-divider" />

      {/* Address Section */}
      <div className="footer-address">
        <p>123 NGO Street, City, State, 12345</p>
        <p>Email: info@sahkaryapratisthan.org</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
