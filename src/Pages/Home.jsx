import React from "react";
import { MenuCard } from "../Components/MenuCard";
import { Newsletter } from "../Components/Newsletter";

export const Home = () => {
  return (
    <div className="main w-screen p-2 ml-12">
      <div className="hero flex justify-center">
        <div className="text my-auto">
          <h2>Enjoy Delicious Authentic Food</h2>
          <h4>
            Nothing is better than going home to family and eating good food and
            relaxing.
          </h4>
          <button>Order Now</button>
        </div>
        <div className="img">
          <img src="src\assets\Untitled design(2).png" alt="" />
        </div>
      </div>
      <div className="section flex justify-center">
        <div className="img">
          <img src="src\assets\Untitled design(2).png" alt="" />
        </div>
        <div className="text my-auto">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
          <h4>
          magnam, obcaecati, minus officiis, corporis magni impedit repellendus dolores architecto error. Cumque totam officia delectus quaerat quisquam voluptatum sed adipisci.
          </h4>
          <button>Order Now</button>
        </div>
      </div>
      <div className="section">
        <h2 className="text-center">Popular Dishes</h2>
        {/* Use a query to display the few dishes with the most popularity */}
        <div className="flex flex-wrap justify-between">
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        </div>
      </div>
      <div id="newsletter">
        <Newsletter/>
      </div>
    </div>
  );
};

// export default Home
