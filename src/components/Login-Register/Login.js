import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase-init";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <div className="relative z-0 my-10">
          <input
            type="email"
            name="email"
            id="floating_standard"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="relative z-0 my-10">
          <input
            type="password"
            name="password"
            id="floating_standard"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setPassword(e.target.value)}
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

        <input
          type="submit"
          className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
