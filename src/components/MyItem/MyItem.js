import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import InventoryItem from "../Inventory/InventoryItem";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const uid = user?.uid;

  useEffect(() => {
    const getMyItems = async () => {
      await axios
        .get(`https://super-bike-server.vercel.app/my-items?uid=${uid}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => setMyItems(res.data))
        .catch((error) => console.log(error));
    };
    getMyItems();
  }, [myItems, uid]);

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
