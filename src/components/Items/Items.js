import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Items.css";
import { BsArrowRight } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import "aos";
import { Link, useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://super-bike-warehouse.herokuapp.com/items/6")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-[100vh] mb-32 mx-4 md:mx-10 lg:mx-32">
      <div className="text-center">
        <h1
          data-aos="zoom-in-down"
          className="inline-block text-3xl my-6 text-red-600 mx-auto font-bold pb-2 border-b-4 border-b-red-400 border-dotted"
        >
          Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => {
          return (
            <div
            data-aos="fade-down"
            data-aos-duration="2000"
              className="flex flex-col p-6 shadow-xl hover:shadow-2xl hover:shadow-red-400 duration-700 bg-white rounded-lg"
              key={item._id}
            >
              <div className="w-full mb-6">
                <img
                  className="block w-max h-[400px] mx-auto"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="description">
                  <h1 className="text-3xl font-semibold mb-4 cursor-pointer hover:text-red-600 duration-300">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">
                    {item.description.slice(0, 100) + "....."}
                  </p>
                  <div className="price-container">
                    <BsArrowRight className="arrow"></BsArrowRight>
                    <p className="font-semibold text-xl my-4 price cursor-pointer">
                      Price:{" "}
                      <span className="text-red-600"> {item.price} BDT</span>
                    </p>
                  </div>
                  <button
                    className="red-btn mb-4 py-2 px-6 flex items-center"
                    onClick={() => navigate(`/inventory/${item._id}`)}
                  >
                    <BiDetail></BiDetail>
                    <p className="ml-2">See Details</p>
                  </button>
                </div>
                <div className="flex justify-between font-semibold">
                  <p className="translate-hover" title="Engine">
                    {item.engine}
                  </p>
                  <p className="translate-hover" title="Total Available">
                    {item.quantity}
                  </p>
                  <p className="translate-hover" title="Supplier">
                    {item.supplier}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-end mt-8">
        <Link
          to="/inventories"
          className="text-blue-600 hover:text-red-600 py-2 px-6 flex items-center duration-300 text-xl"
        >
          <p className="mr-2">Manage Inventories</p>
          <BsArrowReturnRight></BsArrowReturnRight>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
