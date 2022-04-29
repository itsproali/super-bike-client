import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h3 className="banner-subtitle">Best Bike Dealer</h3>
        <h1 className="banner-title">Popular Bike</h1>
        <h1 className="banner-title mb-6">Dealership</h1>
        <Link to="/">
          <button className="red-btn py-4 px-6">DISCOVER MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
