import BaseButton from "@/components/button/BaseButton";
import BoxWrapper from "@/components/wrapper/BoxWrapper";
import Image from "next/image";
import React from "react";

type Props = {
  checkout: {
    subtotal: number;
    discount: number;
    tax: number;
    total: number;
  };
};

export default function CartCheckout({ checkout }: Props) {
  const paymentImages = ["pay", "visa", "pp", "paypal", "american"];

  const { subtotal, discount, tax, total } = checkout;

  return (
    <BoxWrapper>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="text-gray-500">Subtotal:</span>
          <span className="text-gray-500">${subtotal}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Discount:</span>
          <span className="text-red-500">- ${discount}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Tax:</span>
          <span className="text-green-600">+ ${tax}</span>
        </li>
      </ul>
      <hr className="my-5 border-b border-gray-100" />
      <div className="space-y-4">
        <p className="flex justify-between  font-bold">
          <span className="text-l">Total:</span>
          <span className="text-xl">${total}</span>
        </p>

        <BaseButton className="w-full bg-green-500 p-3 text-white hover:bg-green-700">
          <span className="font-bold">Checkout</span>
        </BaseButton>

        <div className="flex justify-center space-x-2">
          {paymentImages.map((i, index) => (
            <Image
              key={index}
              src={`images/cart/payment/${i}.svg`}
              width={45}
              height={45}
              alt={i}
            />
          ))}
        </div>
      </div>
    </BoxWrapper>
  );
}
