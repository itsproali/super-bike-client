import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import useItems from "../../hooks/useItems";

const InventoryItem = ({ item }) => {
  const { _id, title, quantity, sold, img, price } = item;
  const [items, setItems] = useItems([]);
  const navigate = useNavigate();

  // Handle Delete
  const handleDelete = async (id) => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (password === "delete") {
      Swal.fire({ icon: "success", text: "Item Deleted successfully" });
      axios
        .delete(`https://super-bike-server.vercel.app/delete/${id}`)
        .then((res) => {
          const remaining = items.filter((item) => item._id !== id);
          console.log(remaining);
          setItems(remaining);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You entered a wrong password!",
      });
    }
  };

  return (
    <div
      className="inventory-item flex flex-col lg:flex-row bg-white p-4 rounded my-4 shadow-lg"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      {/* Item Image */}
      <div className="inventory-image w-full lg:w-[300px] border-2 rounded-lg">
        <img className="block h-[200px] mx-auto" src={img} alt={title} />
      </div>
      <div className="ml-4 w-full flex flex-col justify-between">
        <div className="flex items-center justify-center m-4 ">
          {/* Edit Button */}
          <button
            className="gray-btn ml-auto mr-4 py-2 px-6 flex items-center"
            onClick={() => navigate(`/edit/${item._id}`)}
          >
            <FaEdit></FaEdit>
            <p className="ml-2">Edit</p>
          </button>

          {/* Delete Button */}
          <button
            className="red-btn py-2 px-6 flex items-center"
            onClick={() => handleDelete(item._id)}
          >
            <MdDelete></MdDelete>
            <p className="ml-2">Delete</p>
          </button>
        </div>

        {/* Item description */}
        <div>
          <Link className="block mb-4" to={`/inventory/${_id}`}>
            <h1 className="font-semibold text-2xl cursor-pointer hover:text-red-600 duration-500">
              {title}
            </h1>
          </Link>
          <p className="text-xl cursor-pointer">
            Price : <b className="text-red-600 duration-300">{price}</b>
          </p>
        </div>

        <div className="flex justify-between font-semibold m-4">
          <p className="translate-hover" title="Sold">
            Sold: <span className="text-red-600">{sold}</span>
          </p>
          <p className="translate-hover" title="Total Available">
            Available: <span className="text-red-600">{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
