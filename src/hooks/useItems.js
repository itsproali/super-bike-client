import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  // Load All Items
  useEffect(() => {
    axios
      .get("https://super-bike-warehouse.herokuapp.com/items")
      .then((res) => {
        setItems(res.data);
      });
  }, [items]);
  return [items, setItems];
};

export default useItems;
