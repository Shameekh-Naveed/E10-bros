import React, { useState } from "react";
import {CompactCartItem} from './CompactCartItem'
import { useAutoAnimate } from "@formkit/auto-animate/react";

const CartComponent = () => {
  const [cartState, setCartState] = useState(false);
  const [cart, setCart] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <>
      <img
        src="https://img.icons8.com/laces/48/null/shopping-cart.png"
        className="fixed bottom-1 right-4 rounded-full h-12 bg-yellow-500 cursor-pointer z-10"
        onClick={() => setCartState(!cartState)}
      />
      <div ref={parent}>
        {cartState && (
          <div
            className="fixed bottom-4 right-8 rounded-sm w-96 h-auto bg-white border border-black "
            style={{ minHeight: "30rem" }}
          >
            <CompactCartItem/>
            <CompactCartItem/>
            <CompactCartItem/>
            <CompactCartItem/>
            {/* {cart.map((item) => {})} */}
          </div>
        )}
      </div>
    </>
  );
};

export default CartComponent;
