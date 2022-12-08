import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import "./Add_EditItem.css";

const EditItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  // Load Item Details
  useEffect(() => {
    axios
      .get(`https://super-bike-server.vercel.app/item/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => console.error(error.message));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const engine = e.target.engine.value;
    const item = { title, brand, price, supplier, description, img, engine };

    axios
      .put(`https://super-bike-server.vercel.app/edit/${id}`, { item })
      .then((res) => {
        toast.success("Product Updated Successfully");
        navigate("/inventories");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-12">
      <div className="form-container">
        <form onSubmit={handleUpdate}>
          <div className="input-group">
            <label htmlFor="title">Title :</label>
            <input
              className="input-field"
              type="text"
              name="title"
              id="title"
              defaultValue={item.title}
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
              defaultValue={item.brand}
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
              defaultValue={item.price}
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
              defaultValue={item.supplier}
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
              defaultValue={item.engine}
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
              defaultValue={item.img}
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
              defaultValue={item.description}
              required
            ></textarea>
          </div>

          <div className="input-group">
            <input
              className="red-btn w-full py-4 cursor-pointer"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
