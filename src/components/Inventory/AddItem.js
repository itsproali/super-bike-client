import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase-init";

const AddItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const sold = 0;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const engine = e.target.engine.value;
    const uid = user.uid;
    const item = {
      title,
      brand,
      price,
      quantity,
      sold,
      supplier,
      description,
      img,
      engine,
      uid,
    };

    axios
      .post(`https://super-bike-server.vercel.app/add`, { item })
      .then((res) => {
        console.log(res.data);
        toast.success("Product Added Successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-12">
      <h1 className="text-center font-semibold mb-4 text-3xl text-red-600">
        Add a New Product
      </h1>
      <div className="form-container">
        <form onSubmit={handleAdd}>
          <div className="input-group">
            <label htmlFor="title">Product Name :</label>
            <input
              className="input-field"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="brand">Brand :</label>
            <input
              className="input-field"
              type="text"
              name="brand"
              id="brand"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price :</label>
            <input
              className="input-field"
              type="text"
              name="price"
              id="price"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="quantity">Quantity :</label>
            <input
              className="input-field"
              type="text"
              name="quantity"
              id="quantity"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="supplier">Supplier :</label>
            <input
              className="input-field"
              type="text"
              name="supplier"
              id="supplier"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="engine">Engine :</label>
            <input
              className="input-field"
              type="text"
              name="engine"
              id="engine"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="img">ImageURL :</label>
            <input
              className="input-field"
              type="text"
              name="img"
              id="img"
              placeholder="http://www.photo.png"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description :</label>
            <textarea
              className="input-field"
              name="description"
              id="description"
              rows="10"
              required
            ></textarea>
          </div>

          <div className="input-group">
            <input
              className="red-btn w-full py-4 cursor-pointer"
              type="submit"
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
