// @flow
import { Product } from "@/models/Product";
import Image from "next/image";
import * as React from "react";

type Props = {
  item: Product;
  className?: string;
};
export const ProductCard = ({ item, className }: Props) => {
  return (
    <div className={`bg-white p-3 border ${className}`}>
      <p>{item.title}</p>
      <div className="flex justify-between">
        <div className="flex flex-col text-xs text-gray-400 pt-2">
          <span>From</span>
          <span>USD {item.price}</span>
        </div>
        <Image src={item.image} alt={item.title} width={60} height={60} />
      </div>
    </div>
  );
};
