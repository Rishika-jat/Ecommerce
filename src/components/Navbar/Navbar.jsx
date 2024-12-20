import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import lg from "../../assets/lg.jpg";
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar flex justify-around items-center shadow-lg p-4 bg-white">
      <div className="flex items-center justify-center">
        <img src={lg} alt="" className="w-10 rotate-180" />
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-3 items-center">
        <FaSearch size={20} color="gray" />
        <input
          type="text"
          placeholder="Search"
          className=" focus:outline-none border-gray-300 p-2 w-80 rounded-3xl"
        />
      </div>
      <div>
        <ul className="list-none flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-black" : "no-underline text-black"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "underline text-black" : "no-underline text-black"
            }
          >
            <li>Shop</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-black" : "no-underline text-black"
            }
          >
            {" "}
            <li>Contact</li>
          </NavLink>
          <NavLink to="/cart">
            <li className="no-underline text-black">
              <FaShoppingCart className="mr-2" />
            </li>
          </NavLink>

          <NavLink to="/wishlist">
            <li className="no-underline text-black">
              <FaHeart />
            </li>
          </NavLink>

<NavLink to="/MyAccount">
<li className="no-underline text-black">
            {" "}
            <FaUser className="text-black" size={16} />
          </li>
</NavLink>
        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
