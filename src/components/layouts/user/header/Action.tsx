import {
  Cart,
  Message,
  Order,
  Profile,
} from "@/components/commons/icons/Index";
import React from "react";

const Action = () => {
  return (
    <div className="flex space-x-5 content-center">
      <div className="flex flex-col items-center space-y-2">
        <Profile fill="#8B96A5" />
        <span className="text-xs text-gray-500">Profile</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Message />
        <span className="text-xs text-gray-500">Message</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Order />
        <span className="text-xs text-gray-500">Order</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Cart />
        <span className="text-xs text-gray-500">Cart</span>
      </div>
    </div>
  );
};

export default Action;
