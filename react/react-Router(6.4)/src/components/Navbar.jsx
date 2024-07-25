import React from "react";
import logo from "../assets/react.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="container">
          <div className="flex items-center justify-between py-4 ">
            <div className="px-4">
              <NavLink to="/">
                <img src={logo} alt="" className="size-24" />
              </NavLink>
            </div>
            <ul className="flex text-white text-lg space-x-20 font-black">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">ContactUs</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
