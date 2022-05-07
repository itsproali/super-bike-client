import React from "react";
import { Link } from "react-router-dom";
import "./BikeService.css";

const BikeService = () => {
  return (
    <div className="mx-2 md:mx-8 my-12">
      <div className="bike-service-container px-3 md:px-16 py-4 md:py-0 rounded-2xl flex flex-col md:flex-row items-center justify-between">
        <div
          className="bike-service-text text-white order-2 md:order-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="font-medium">DOWNLOAD APP</p>
          <h1 className="text-5xl font-bold mt-6 mb-2">
            Download Our Free App
          </h1>
          <h1 className="text-5xl font-bold mb-8">Bike Service</h1>
          <div className="download-btn flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src="https://i.ibb.co/BjjtxsH/download-btn-01.png"
                alt="app-store"
              />
            </Link>
            <Link to="/" className="cursor-pointer ml-4">
              <img
                src="https://i.ibb.co/XVYmfv7/download-btn02.png"
                alt="play-store"
              />
            </Link>
          </div>
        </div>
        <div
          className="bike-service-image mx-auto md:mx-0 md:ml-auto order-1 md:order-2"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img
            className="w-auto h-[450px] md:h-[500px]"
            src="https://i.ibb.co/bLNPs30/mobile-compressed.png.png"
            alt="Bike Service"
          />
        </div>
      </div>
    </div>
  );
};

export default BikeService;
