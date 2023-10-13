import BoxWrapper from "@/components/wrapper/BoxWrapper";
import React from "react";
import CartItem from "./CartItem";
import PrimaryButton from "@/components/button/PrimaryButton";
import { ArrowLeft } from "@/components/icons";
import LightButton from "@/components/button/LightButton";
import CartCoupon from "./CartCoupon";
import CartCheckout from "./CartCheckout";
import useStateCart from "../hooks/useStateCart";
import useActionCart from "../hooks/useActionCart";
import Link from "next/link";

export default function CartBox() {
  const { items, checkout } = useStateCart();
  const { remove, updateQuentity, removeAll } = useActionCart();

  return (
    <div className="grid grid-cols-12 gap-3 ">
      <BoxWrapper className="col-span-9 space-y-5">
        <div className="w-full space-y-5">
          {items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              removeHandler={remove}
              quantityChangeHandler={updateQuentity}
            />
          ))}

          {!items.length && (
            <span className="text-gray-500">cart is empty ...</span>
          )}
        </div>

        <div className="flex justify-between">
          <Link href={"/"}>
            <PrimaryButton customClass="px-5 font-medium rounded-md flex space-x-3 justify-items-center items-center">
              <ArrowLeft className="h-4 w-4 fill-white" />
              <span>Back to shop</span>
            </PrimaryButton>
          </Link>

          <LightButton
            title="Remove all"
            customClass="text-blue-500 px-5 font-medium rounded-md"
            disabled={!items.length}
            onClick={removeAll}
          />
        </div>
      </BoxWrapper>
      <div className="col-span-3 space-y-5">
        <CartCoupon />
        <CartCheckout checkout={checkout} />
      </div>
    </div>
  );
}
