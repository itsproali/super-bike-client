import axios from "axios";
import React, { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Load All Items
  useEffect(() => {
    axios
      .get("https://super-bike-warehouse.herokuapp.com/items")
      .then((res) => {
        setItems(res.data);
      });
  }, []);
  return (
    <div className="my-16 mx-3 md:mx-8 lg:mx-12">
      <h1 className="text-xl font-semibold text-red-600">
        Total Found: {items.length} Bikes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Inventory Items */}
        <div className="md:col-span-3 lg:col-span-3">
          {items.map((item) => (
            <InventoryItem key={item._id} item={item}></InventoryItem>
          ))}
        </div>

        {/* Inventory Manage side*/}
        <div className="w-full bg-white shadow-lg h-96 md:col-span-2 lg:col-span-2 flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default ManageInventory;
