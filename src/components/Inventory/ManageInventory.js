import axios from "axios";
import React, { useState, useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useItems from "../../hooks/useItems";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [items] = useItems([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://super-bike-server.vercel.app/item-count")
      .then((res) => setCount(res.data.count))
      .catch((error) => console.log(error));
  }, [count, items]);

  return (
    <div className=" my-16 mx-3 md:mx-8 lg:mx-12">
      <h1 className="text-xl font-semibold text-red-600">
        Total Found: {count} Bikes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Inventory Manage side*/}
        <div
          className="w-full bg-white shadow-lg h-96 md:col-span-2 flex items-center justify-center"
          data-aos="fade-out-down"
          data-aos-duration="1000"
        >
          {/* <form>
          <input className=" block w-full" type="text" name="search" id="search" />
          <input type="submit" value="Search" />
        </form> */}
          <button
            onClick={() => navigate("/add")}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-center duration-500 text-white rounded flex items-center"
          >
            <MdPlaylistAdd></MdPlaylistAdd>
            <p className="ml-1">Add New Item</p>
          </button>
        </div>

        {/* Inventory Items */}
        <div className="md:col-span-3">
          {items.map((item) => (
            <InventoryItem key={item._id} item={item}></InventoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
