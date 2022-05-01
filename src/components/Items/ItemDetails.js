import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:5000/item/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);
  return (
    <div className="mx-2 md:mx-16 lg:mx-32">
      <div>
        <h1 className="text-center text-3xl text-red-600 my-6">{item.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
          <div className="w-full md:w-[500px] lg:w-full mx-auto">
            <img
              className="block w-max h-[400px]"
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className=" mt-6 lg:mt-0 lg:ml-6">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-justify md:text-xl text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
        <h1 className="text-center text-2xl my-6 font-semibold">
          Full Details
        </h1>
        <table className="table">
          <tr>
            <td className="data-name">Name :</td>
            <td>{item.title}</td>
          </tr>
          <tr>
            <td className="data-name">Brand :</td>
            <td>{item.brand}</td>
          </tr>
          <tr>
            <td className="data-name">Supplier :</td>
            <td>{item.supplier}</td>
          </tr>
          <tr>
            <td className="data-name">Engine :</td>
            <td>{item.engine}</td>
          </tr>
          <tr>
            <td className="data-name">Price (taka):</td>
            <td>{item.price}</td>
          </tr>
          <tr>
            <td className="data-name">Sold : </td>
            <td>{item ? item.sold : "0"}</td>
          </tr>
          <tr>
            <td className="data-name">Available : </td>
            <td>{item.quantity}</td>
          </tr>

          <tr>
            <td className="data-name">Description : </td>
            <td>{item.description}</td>
          </tr>
        </table>
        <div className="flex items-center justify-end my-8">
        <button
          className="gray-btn mb-4 py-2 px-6 mx-4 flex items-center"
          onClick={() => navigate(`/inventory/${item._id}`)}
        >
          <FaEdit></FaEdit>
          <p className="ml-2">Edit</p>
        </button>
        <button
          className="red-btn mb-4 py-2 px-6 flex items-center"
          onClick={() => navigate(`/inventory/${item._id}`)}
        >
          <FaEdit></FaEdit>
          <p className="ml-2">Delivered</p>
        </button>
       </div>
      </div>
    </div>
  );
};

export default ItemDetails;
