import React, { useState } from "react";

export const CompactCartItem = (props) => {
  let { image, name, price } = props;
  name = "karahi";
  image = "https://picsum.photos/50";
  price = 100;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex px-2 my-2">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="btn-set flex">
        <i
          className="font-semibold cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </i>
        <p>{quantity}</p>
        <i
          className="font-semibold cursor-pointer"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </i>
      </div>
      <div className="price">{price * quantity}</div>
    </div>
  );
};
