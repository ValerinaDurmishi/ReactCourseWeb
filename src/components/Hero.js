import React, { useState } from "react";
import "./hero.css";
import HeroInput from "./HeroInput";
import SearchedPosts from "./SearchedPosts";

const Hero = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="background-image-hero-component">
      <div className="content-hero-component">
        <div className="title-hero-component">
          <h2>Find your dream home today</h2>
          <div className="description-hero-component">
            <h5>Your trusted real estate partner.</h5>
            <p>
              Our team of investment specialist will work with you to identify
              your goals and find properties that meet your criteria.
            </p>
          </div>
          <HeroInput setResults={setResults} />
          <SearchedPosts results={results} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
