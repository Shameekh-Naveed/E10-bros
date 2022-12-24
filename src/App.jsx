import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import CartComponent from "./Components/CartComponent";
import LoginSignup from "./Components/LoginSignup";
import { Checkout } from "./Pages/Checkout";
import { Profile } from "./Pages/Profile";
import { Home } from "./Pages/Home";
import  Menu  from "./Pages/Menu";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import { useAutoAnimate } from "@formkit/auto-animate/react";
// import Root from "./routes/root";

const App = () => {
  const [parent, enableAnimations] = useAutoAnimate();
  // const parentRef = useRef();

  // useEffect(() => {
  //   if (parentRef.current) {
  //     autoAnimate(parentRef.current);
  //   }
  // }, [parentRef]);

  return (
    <div ref={parent} className="m-0 p-0 flex flex-row">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
  

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
