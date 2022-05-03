import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav
        className={`${
          location.pathname === "/" ? "bg-transparent" : "bg-white shadow-lg"
        } border-gray-200 px-4 sm:px-16 py-2.5 rounded md:rounded-none relative top-0 z-40`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">

          {/* Navbar Brand */}
          <Link to="/" className="flex items-center">
            <span className="text-red-600 self-center text-2xl font-semibold whitespace-nowrap">
              Super Bike
            </span>
          </Link>
          <div className="flex items-center md:order-2">

          {/* User Controls */}
            {user ? (
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex mr-3 text-sm bg-gray-100 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                {user.photoURL ? (
                  <img
                    className="w-8 h-8 rounded-full text-slate-500"
                    src={user.photoURL}
                    alt="user"
                  />
                ) : (
                  <CgProfile className="w-8 h-8"></CgProfile>
                )}
              </button>
            ) : (
              <div>
                <button
                  className="red-btn py-2 px-4"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            )}

            <div
              className={`${
                open ? "block" : "hidden"
              } absolute top-8 right-14 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg`}
            >
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900">
                  {user?.displayName}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate">
                  {user?.email}
                </span>
              </div>
              <ul className="py-1">
                <li>
                  <Link
                    to="/inventories"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                    onClick={() => setOpen(!open)}
                  >
                    Manage Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-item"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                    onClick={() => setOpen(!open)}
                  >
                    My Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                    onClick={() => setOpen(!open)}
                  >
                    Add Item
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                    onClick={() => {
                      toast.success("Successfully logged out");
                      setOpen(!open);
                      signOut(auth);
                    }}
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamburger menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700"
            >
              <svg
                className={`${menuOpen ? "hidden" : "block"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`${menuOpen ? "block" : "hidden"} ${
              location.pathname === "/" && "bg-white md:bg-transparent"
            } justify-between items-center w-full md:flex md:w-auto md:order-1 duration-500`}
          >
            <ul className="w-full md:w-auto flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/"
                  className="nav-link py-2 pr-4 pl-3 md:p-0"
                  //   ariaCurrent="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link py-2 pr-4 pl-3 md:p-0">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inventories"
                  className="nav-link py-2 pr-4 pl-3 md:p-0"
                >
                  Inventories
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="nav-link py-2 pr-4 pl-3 md:p-0">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="nav-link py-2 pr-4 pl-3 md:p-0"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
