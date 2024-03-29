import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import Spinner from "../Spinner/Spinner";
import "./Login_Register.css";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) {
      toast.success("Verification Email sent");
      navigate("/");
    }
  }, [navigate, user]);

  useEffect(() => {
    if (error) {
      if (error.message.includes("already")) {
        toast.error("You Already have an account with this email address");
      } else {
        toast.error(`${error.message}`);
      }
    }
  }, [error]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName, photoURL });

    const userId = user.uid;
    axios
      .post(`${process.env.REACT_APP_SERVER}/getToken`, {
        userId,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-blue-600 my-10 font-semibold">
        Register
      </h1>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your photoURL (optional)
            </label>
            <input
              type="text"
              id="photo"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="https://www.photo.png"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <Link
                to="/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </Link>
            </label>
          </div>

          <input
            type="submit"
            className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300"
            value="Register new account"
          />
          <p className="text-center my-4">
            Already have an account?{" "}
            <Link className="underline text-blue-600" to="/login">
              Login Now
            </Link>
          </p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
