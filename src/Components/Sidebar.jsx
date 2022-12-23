import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// import PropTypes from 'prop-types'

export const Sidebar = () => {
  // const opener = props.opener()
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [size, setSize] = useState({ width: "3rem" });
  const [eleChange, setEleChange] = useState({})

  const changeSidebar = (action) => {
    if (sidebarStatus) {
      // size = {"width":"1rem"};
      setSize({ width: "3rem" });
      setSidebarStatus(false);
    setEleChange({"transform":"rotate(360deg)"})
    } else {
      setSize({ width: "16rem" });
      setEleChange({"transform":"rotate(0deg)"})

      setSidebarStatus(true);
    }

  };

  return (
    <div
      className="fixed h-screen text-center bg-black text-white transition-all"
      style={size}
    >
      {/* <h2 id="logo font-bold my-8">Sidebar</h2> */}
      <img
        src="src\assets\logo.png"
        id="logo"
        className="my-8 max-h-16 w-auto mx-auto block transition-transform duration-500 ease-linear"
        style={eleChange}
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
