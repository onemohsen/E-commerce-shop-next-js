import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductAction from "./ProductAction";
import BoxWrapper from "@/components/wrapper/BoxWrapper";

export function ProductMain() {
  return (
    <BoxWrapper className="grid grid-cols-12 gap-5">
      <ProductImage className="col-span-4 flex flex-col items-center justify-self-start" />
      <ProductInfo className="col-span-5 space-y-2" />
      <ProductAction className="col-span-3" />
    </BoxWrapper>
  );
}
