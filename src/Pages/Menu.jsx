import React from "react";
import { MenuCard } from "../Components/MenuCard";

const Menu = () => {
  return (
    <div className="container ml-12 p-2">
      <div className="">
        <h2>Heading</h2>
        <div className="flex flex-wrap justify-between border border-black">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div className="">
        <h2>Heading</h2>
        <div className="flex flex-wrap justify-between border border-black">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div className="">
        <h2>Heading</h2>
        <div className="flex flex-wrap justify-between border border-black">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div className="">
        <h2>Heading</h2>
        <div className="flex flex-wrap justify-between border border-black">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div className="">
        <h2>Heading</h2>
        <div className="flex flex-wrap justify-between border border-black">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default Menu