import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://super-bike-warehouse.herokuapp.com/items").then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div>
      {items.map((item) => (
        <h1 key={item._id}>{item.title}</h1>
      ))}
    </div>
  );
};

export default ManageInventory;
