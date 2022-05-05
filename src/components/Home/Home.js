import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items className="h-[100vh]"></Items>
      <Features></Features>
    </div>
  );
};

export default Home;
