import React from "react";
import { Link } from "react-router-dom";
import "./firstpage.css";
import interior from "../images/interior.jpg";

const FirstPage = () => {
  return (
    <div className="first_page_why_us_info">
      <div className="why_us_content">
        <div className="why_us_header">
          <h5>Why us</h5>
          <h2>We will find the right home for you.</h2>
        </div>
        <div className="why_us_paragraph">
          <p>
            We're dedicated to helping you find your dream home, sell your
            property, and make informed real estate decisions.
          </p>
          <Link to="/about">Learn more</Link>
        </div>
      </div>
      <div className="first_page_interior_image">
        <img src={interior} alt="interior image" />
      </div>
    </div>
  );
};

export default FirstPage;
