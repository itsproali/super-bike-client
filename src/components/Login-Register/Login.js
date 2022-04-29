import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import Spinner from "../Spinner/Spinner";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user) {
      toast.success("Successfully Logged In");
      navigate("/");
    }
  }, [navigate, user]);

  useEffect(() => {
    if (resetError) {
      if (resetError.message.includes("invalid")) {
        toast.error("Please enter a valid Email");
      } else if (resetError.message.includes("not-found")) {
        toast.error("User not found");
      } else {
        toast.error(`${resetError.message}`);
      }
    } else if (error) {
      if (error.message.includes("wrong")) {
        toast.error("You entered a wrong password !!");
      } else {
        toast.error("Something went Wrong");
      }
    }
  }, [error, resetError]);

  if (loading || sending) {
    return <Spinner></Spinner>;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast.success("Password reset email sent");
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-blue-600 my-10 font-semibold">
        Login
      </h1>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <div className="relative z-0 my-10">
            <input
              type="email"
              name="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onBlur={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 mt-10">
            <input
              type="password"
              name="password"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onBlur={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="text-right  my-4">
            <button
              onClick={resetPassword}
              className="text-blue-600 hover:underline"
            >
              Forgotten Password?
            </button>
          </div>

          <input
            type="submit"
            className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300"
            value="Login"
          />
          <p className="text-center my-4">
            Don't have an account?{" "}
            <Link className="underline text-blue-600" to="/register">
              Register Now
            </Link>
          </p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
