import React from "react";
import Banner from "../Banner/Banner";
import BikeService from "../BikeService/BikeService";
import Features from "../Features/Features";
import Items from "../Items/Items";
import Review from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items className="h-[100vh]"></Items>
      <Features></Features>
      <Review></Review>
      <BikeService></BikeService>
    </div>
  );
};

export default Home;
