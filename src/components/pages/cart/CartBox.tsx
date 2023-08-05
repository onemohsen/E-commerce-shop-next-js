import BoxWrapper from "@/components/commons/wrapper/BoxWrapper";
import React from "react";
import CartItem from "./CartItem";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { ArrowLeft } from "@/components/commons/icons/Index";
import LightButton from "@/components/commons/button/LightButton";
import { ProductType } from "@/models/Product";

type Props = {
  items: ProductType[];
};

export default function CartBox({ items }: Props) {
  return (
    <div className="grid grid-cols-12 gap-3 ">
      <BoxWrapper className="col-span-9 space-y-5">
        <div className="w-full space-y-5">
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>

        <div className="flex justify-between">
          <PrimaryButton customClass="px-5 font-medium rounded-md flex space-x-3 justify-items-center items-center">
            <ArrowLeft className="h-4 w-4 fill-white" />
            <span>Back to shop</span>
          </PrimaryButton>

          <LightButton
            title="Remove all"
            customClass="text-blue-500 px-5 font-medium rounded-md"
          />
        </div>
      </BoxWrapper>
      <BoxWrapper className="col-span-3">have a coupon ?</BoxWrapper>
    </div>
  );
}
