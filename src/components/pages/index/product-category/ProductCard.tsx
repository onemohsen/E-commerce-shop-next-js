// @flow
import { ProductType } from "@/models/Product";
import Image from "next/image";
import * as React from "react";

type Props = {
  item: ProductType;
  className?: string;
};
export const ProductCard = ({ item, className }: Props) => {
  return (
    <div className={`border bg-white px-3 py-1 ${className}`}>
      <div className="flex justify-between ">
        <div className="flex flex-col text-xs text-gray-400">
          <p
            className="mb-4 w-24 truncate text-lg text-black "
            title={item.title}
          >
            {item.title}
          </p>
          <span>From</span>
          <span>USD {item.price}</span>
        </div>
        <div className="my-auto max-h-[90px]">
          <Image src={item.image} alt={item.title} width={90} height={90} />
        </div>
      </div>
    </div>
  );
};
