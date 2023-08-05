import {
  Cart,
  Message,
  Order,
  Profile,
} from "@/components/commons/icons/Index";
import Link from "next/link";
import React from "react";

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
      <Link href="/cart" className="flex flex-col items-center space-y-2">
        <Cart className="h-5 w-5 fill-gray-500" />
        <span className="text-xs text-gray-500">Cart</span>
      </Link>
    </div>
  );
};

export default Action;
