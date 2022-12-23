import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// import PropTypes from 'prop-types'

export const Sidebar = () => {
  // const opener = props.opener()
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [size, setSize] = useState({ width: "16rem" });

  const changeSidebar = (action) => {
    if (sidebarStatus) {
      // size = {"width":"1rem"};
      setSize({ width: "3rem" });
      setSidebarStatus(false);
      console.log("1 occure");
      // animate
    } else {
      // size = {"width":"16rem"};
      setSize({ width: "16rem" });

      setSidebarStatus(true);
      console.log("2 occure");
      // close animation
    }
  };

  return (
    <div
      className="absolute h-screen text-center bg-black text-white transition-all"
      style={size}
    >
      {/* <h2 id="logo font-bold my-8">Sidebar</h2> */}
      <img
        src="src\assets\logo.png"
        id="logo"
        className="my-8 h-16 w-auto mx-auto"
      />
      <nav>
        <ul>
          <li className="my-4">
            <Link to={"/home"} href="#">
              Home
            </Link>
          </li>
          <li className="my-4">
            <Link to={"/home2"} href="#">
              About
            </Link>
          </li>
          <li className="my-4">
            <Link to={"/home3"} href="#">
              Services
            </Link>
          </li>
          <li className="my-4">
            <Link to={"/home3"} href="#">
              Portfolio
            </Link>
          </li>
          <li className="my-4">
            <Link to={"/home4"} href="#">
              Blog
            </Link>
          </li>
          <li className="my-4">
            <Link to={"/home5"} href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={changeSidebar}>Click me</button>
    </div>
  );
};
