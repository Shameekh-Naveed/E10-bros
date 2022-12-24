import React from "react";
import { MenuCard } from "../Components/MenuCard";
import { ProgressTracker } from "../Components/ProgressTracker";

export const Profile = () => {
  let user = "Aku";
  return (
    <div className="main w-screen p-2 ml-12">
      <div className="welcome">
        <h2>Welcome {user}</h2>
        <div className="container flex">
          <div className="personal">
            <h2>Personal Information</h2>

            <div className="email">mnaveed.bscs21seexs2sdkaskdj</div>
            <div className="address">mnaveed.bscs21seexs2sdkaskdj</div>
            <div className="phone">mnaveed.bscs21seexs2sdkaskdj</div>
            <button>Edit Infor</button>

            <div>
              <h2>Payment Information</h2>
              <div className="grid">
                <div className="row">
                  <div className="col-1">Card Number</div>
                  <div className="col-2">Expiration Date</div>
                  <div className="col-3">Billing Address</div>
                  <div className="col-4"></div>
                </div>
                <div className="row">
                  <div className="col-1">xxxx-xxxx-xxxx-1234</div>
                  <div className="col-2">01/2023</div>
                  <div className="col-3">123</div>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="src\assets\Untitled design(3).png" alt="" />
          </div>
        </div>
      </div>
      <div className="scheduled">
        {/* if customer has an order scheduled for delivery */}
        <ProgressTracker progress={50} checkpoints={[25, 50, 75]} />
        {/* if customer has an table scheduled*/}
        {/* if customer has nothing scheduled*/}
        <h3>Uh oh! You dont have anything scheduled</h3>
        <button>Delicious Food awaits you</button>
      </div>

      <div className="">
        {/* <h2>Personal Information</h2>
        <form>
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" value="" />
          <br />
          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" value="" />
          <br />
          <label for="phone">Phone:</label>
          <br />
          <input type="tel" id="phone" value="" />
          <br />
          <button type="submit">Update</button>
        </form> */}

        {/* <!-- Order History section --> */}
        <div className="">
          <h2 className="text-center">Order History</h2>
          {/* Use sql to get a list of recent orders */}
          <div className="flex flex-wrap justify-between">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        {/* <!-- Payment Information section --> */}
      </div>
    </div>
  );
};
