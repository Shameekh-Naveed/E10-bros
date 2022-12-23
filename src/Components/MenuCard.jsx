import React from "react";

export const MenuCard = (props) => {
  const { name, img, desc, price } = props;
  //   truncate desc if greater then 15 words
  return (
    <div>
      <img src={img} alt={name} className="inline-block" />
      <h4>{name}</h4>
      <h5>{desc}</h5>
      <div>
        <div>{price}</div>
        <div><button>C</button></div>
      </div>
    </div>
  );
};
