import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import InventoryItem from "../Inventory/InventoryItem";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const email = user.email;

  useEffect(() => {
    axios.post(`http://localhost:5000/my-items`, { email }).then((res) => {
      setMyItems(res.data);
    });
  }, [myItems, email]);

  return (
    <div className="my-8 mx-4 md:mx-16">
      <h1 className="text-center text-2xl text-red-600">
        {myItems.length !== 0
          ? `You Added ${myItems.length} Item`
          : "You didn't add any Item Yet"}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {myItems.map((item) => (
          <InventoryItem key={item._id} item={item}></InventoryItem>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
