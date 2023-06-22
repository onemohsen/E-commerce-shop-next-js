import { Love } from "@/components/commons/icons/Index";
import RateBox from "@/components/commons/products/RateBox";
import { Product } from "@/models/Product";
import Image from "next/image";
import React from "react";

type Props = {
  item: Product;
};

export default function ProductGridCard({ item }: Props) {
  return (
    <div className="flex h-full w-full">
      <div className="   flex flex-col mx-5 w-full ">
        <div className="flex justify-center p-8">
          <Image src={item.image} width={200} height={200} alt={item.title} />
        </div>
        <div className="border-b border-gray-200 w-full"></div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <span className="font-bold text-lg">${item.price}</span>
              {item.oldPrice && item.price < item.oldPrice && (
                <span className="pl-2 text-gray-400 line-through">
                  ${item.oldPrice}
                </span>
              )}
              <RateBox score={item.rate ?? 0} />
            </div>
            <Love
              className="w-10 h-10 fill-current text-blue-600 hover:text-blue-900 border p-1.5 rounded cursor-pointer"
              isFill={false}
            />
          </div>
          <h2 className="text-gray-700">{item.title}</h2>
        </div>
      </div>
    </div>
  );
}
