import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdSystemUpdateAlt, MdOutlineDeliveryDining } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [sold, setSold] = useState(0);
  const [modal, setModal] = useState(false);

  // Load Item Details
  useEffect(() => {
    axios
      .get(`https://super-bike-warehouse.herokuapp.com/item/${id}`)
      .then((res) => {
        setItem(res.data);
        setQuantity(res.data.quantity);
        setSold(res.data.sold);
      })
      .catch((error) => console.error(error.message));
  }, [id, item]);

  // Handle Stock
  const handleStockForm = (e) => {
    e.preventDefault();
    let stock = parseInt(e.target.stock.value);
    console.log(stock);
    if (stock < 999 && stock > 0) {
      axios
        .put(`https://super-bike-warehouse.herokuapp.com/stockItem/${id}`, {
          quantity,
          stock,
        })
        .then((res) => {});
      setModal(false);
      toast.success("Stock Updated");
    } else {
      toast.error("Remember You aren't a Robot");
    }
    e.target.stock.value = "";
  };

  // Handle Delivery
  const handleDeliver = async () => {
    if (quantity > 0) {
      axios
        .put(`https://super-bike-warehouse.herokuapp.com/item/${id}`, {
          quantity,
          sold,
        })
        .then((res) => {
          setQuantity(quantity - 1);
          setSold(quantity + 1);
          toast.success("Delivered Successfully");
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Out of Stock");
    }
  };

  return (
    <div className="mx-2 md:mx-16 lg:mx-32">
      <div>
        <h1 className="text-center text-3xl text-red-600 my-6 font-semibold">
          {item.title}
        </h1>
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
        <h1 className="text-center text-2xl mt-16 mb-6 font-semibold">
          Full Details
        </h1>
        <table className="table">
          <tbody>
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
              <td>{sold}</td>
            </tr>
            <tr>
              <td className="data-name">Available : </td>
              <td>
                {quantity > 0 ? (
                  quantity
                ) : (
                  <p className="text-red-500">Out of Stock</p>
                )}
              </td>
            </tr>

            <tr>
              <td className="data-name">Description : </td>
              <td>{item.description}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col sm:flex-row justify-between items-center my-8">
          <div className="flex items-center">
            <button
              className="gray-btn mb-4 py-2 px-6 mx-4 flex items-center"
              onClick={() => setModal(true)}
            >
              <MdSystemUpdateAlt></MdSystemUpdateAlt>
              <p className="ml-2">ReStock</p>
            </button>
            <button
              className="red-btn mb-4 py-2 px-6 flex items-center"
              onClick={handleDeliver}
            >
              <MdOutlineDeliveryDining></MdOutlineDeliveryDining>
              <p className="ml-2">Delivered</p>
            </button>

            {/* My Own modal */}
            <div
              className={`${
                modal ? "block modal shadow-2xl" : "hidden"
              } duration-500`}
            >
              <form className="stock-form" onSubmit={handleStockForm}>
                <ImCross
                  className="text-red-600 cursor-pointer ml-auto"
                  onClick={() => setModal(false)}
                ></ImCross>
                <h1 className="text-2xl text-center text-red-600 drop-shadow">
                  Restock Quantity
                </h1>
                <input
                  className="stock-input"
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Enter Restock quantity"
                  required
                />
                <input
                  className="red-btn py-3 w-full cursor-pointer"
                  type="submit"
                  value="Restock"
                />
              </form>
            </div>
          </div>

          <div className="">
            <Link
              to="/inventories"
              className="text-blue-600 hover:text-red-600 py-2 px-6 flex items-center duration-300 text-xl"
            >
              <p className="mr-2">Manage Inventories</p>
              <BsArrowReturnRight></BsArrowReturnRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
