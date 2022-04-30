import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items className="h-[100vh]"></Items>
    </div>
  );
};

export default Home;
