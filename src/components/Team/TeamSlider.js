import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "red",
        color: "red",
        textAlign: "center",
        padding: "15px",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "red",
        color: "red",
        textAlign: "center",
        padding: "15px",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

// export default class TeamSlider extends Component {
//   render() {
const TeamSlider = () => {
  const [members, setMembers] = useState();
  useEffect(() => {
    axios
      .get("https://super-bike-warehouse.herokuapp.com/members")
      .then(async (res) => {
        const loadedMembers = await setMembers(res.data);
      })
      .catch((error) => console.log(error.message));
  }, [members]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    centerMargin: "20px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        {members?.map((member) => (
          <div
            key={member._id}
            className="border-8 border-white hover:border-red-600 rounded-lg duration-700 text-center"
            style={{ width: "300px" }}
          >
            <img className="w-full" src={member.img} alt="Mohammad Ali" />
            <h1 className="text-xl text-white bg-red-600 p-4">{member.name}</h1>
            <h2 className="text-2xl font-medium mt-4 mb-2 text-white">
              {member.post}
            </h2>
            <h3 className="text-gray-500 my-1">{member.phone}</h3>
            <h3 className="text-red-600 mb-6">{member.email}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};
// }

export default TeamSlider;
