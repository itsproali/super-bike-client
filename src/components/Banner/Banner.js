import React from "react";
import { Link } from "react-router-dom";
import { RiCompassDiscoverFill } from "react-icons/ri";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="banner-text"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h3 className="banner-subtitle">Best Bike Dealer</h3>
        <h1 className="banner-title">Popular Bike</h1>
        <h1 className="banner-title mb-6">Dealership</h1>
        <Link to="/inventories">
          <button className="red-btn py-4 px-6  flex items-center">
            <p className="mr-2">DISCOVER MORE</p>
            <RiCompassDiscoverFill></RiCompassDiscoverFill>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
