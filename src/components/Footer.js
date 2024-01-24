import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_background_color">
      <h3>Apex Homes</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
        laboriosam.
      </p>
      <div className="footer_flex">
        <div className="first_part">
          <h5>Company</h5>
          <Link to="/about">About Us</Link>
          <Link to="/">Collections</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
        </div>
        <div className="second_part">
          <h5>Learn</h5>
          <Link to="/">Email Marketing</Link>
          <Link to="/">Documents</Link>
          <Link to="/">Campaign</Link>
        </div>
        <div className="third_part">
          <h5>Support</h5>
          <Link to="/">Costumer Service</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Refund Policy</Link>
        </div>
        <div className="last_part">
          <h5>Sitemaps</h5>
          <Link to="/">Help & FAQs</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>
      <div className="footer_copyright">
        <p>&copy; Copyright 2023 Apex Homes - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
