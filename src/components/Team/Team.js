import React from "react";
import TeamSlider from "./TeamSlider";
import "./Team.css"

const Review = () => {
  return (
    <div className="team-container bg-red-100 px-8 py-12 my-32">
      <h1 className="text-center text-4xl text-red-600 mb-8 font-semibold">
        Our Awesome Team
      </h1>
      <TeamSlider></TeamSlider>
    </div>
  );
};

export default Review;
