import React from "react";

export const MenuCard = (props) => {
  let { name, img, desc, price } = props;
  img = "https://picsum.photos/200"
  name = "Al Mashoor Something Something"
  desc = " facilis corporis,  explicabo magnam, eligendi accusantium aliquid mollitia!*"
  price = "100 Pkr"
  //   truncate desc if greater then 15 words
  return (
    <div className="w-60 border-4 rounded border-black my-2">
      <img src={img} alt={name} className="mx-auto mb-2" />
      <h4 className="font-bold mb-1">{name}</h4>
      <h5 className="mb-2">{desc}</h5>
      <div className="flex justify-around">
        <span>{price}</span>
        <span><button>C</button></span>
      </div>
    </div>
  );
};
