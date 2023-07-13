import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductAction from "./ProductAction";

export default function ProductMain() {
  return (
    <div className="grid grid-cols-12 gap-5 p-5 bg-white border rounded">
      <ProductImage className="flex flex-col items-center col-span-4 justify-self-start" />
      <ProductInfo className="col-span-5 space-y-2" />
      <ProductAction className="col-span-3" />
    </div>
  );
}
