import React from "react";
import Form from "./Form";
import backgroundImage from "@/assets/images/bg-card.jpg";

export default function RequestSupplier() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "auto",
      }}
    >
      <div className="flex justify-between bg-gradient-to-r from-blue-500 p-8 ">
        <div className="w-1/4 space-y-4">
          <p className="text-2xl font-bold text-white ">
            An easy way to send requests to all suppliers
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="w-2/4">
          <Form />
        </div>
      </div>
    </div>
  );
}
