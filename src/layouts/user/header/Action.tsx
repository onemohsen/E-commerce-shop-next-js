import { Message, Order, Profile } from "@/components/icons";
import React from "react";
import Cart from "./actions/Cart";

const Action = () => {
  return (
    <div className="flex content-center space-x-5">
      <div className="flex flex-col items-center space-y-2">
        <Profile fill="#8B96A5" />
        <span className="text-xs text-gray-500">Profile</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Message className="h-5 w-5 fill-gray-600" />
        <span className="text-xs text-gray-500">Message</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Order />
        <span className="text-xs text-gray-500">Order</span>
      </div>

      <Cart className="flex flex-col items-center space-y-2" />
    </div>
  );
};

export default Action;
