import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Items.css";
import { BsArrowRight } from "react-icons/bs";

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items/6").then((res) => {
      setItems(res.data);
    });
  }, []);
  
  return (
    <div className="grid grid-cols-1 mt-[100vh] mx-4 md:mx-10 lg:mx-32">
      <div>
        {items.map((item) => {
          return (
            <div
              data-aos="zoom-in-right"
              className="flex flex-col lg:flex-row p-6 my-8 border-2 border-red-500"
              key={item._id}
            >
              <div className="w-full lg:w-[600px] h-full  lg:h-[300px] mb-6 md:mb-0 md:mr-16">
                <img
                  className="block w-max mx-auto"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="description">
                  <h1 className="text-3xl font-semibold mb-4">{item.title}</h1>
                  <p className="">{item.description.slice(0, 150) + "....."}</p>
                  <div className="price-container">
                    <BsArrowRight className="arrow"></BsArrowRight>
                    <p className="font-semibold text-xl my-4 price">
                      Price: <span className="text-red-600"> {item.price} BDT</span>
                    </p>
                  </div>
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
    </div>
  );
};

export default Inventory;
