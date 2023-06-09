import { ProductType } from "@/models/Product";
import Image from "next/image";
import * as React from "react";

type OfferProduct = ProductType & {
  offer: number;
};

type Props = {
  item: OfferProduct;
  className?: string;
};
export const ProductOfferCard = ({ item, className }: Props) => {
  return (
    <div className={`${className}`}>
      <div className="w-full flex justify-center max-h-[120px]">
        <Image src={item.image} alt={item.title} width={120} height={120} />
      </div>
      <div className="w-full space-y-1 text-center">
        <span title={item.title} className="block truncate">
          {item.title}
        </span>
        <span className="bg-red-200 rounded-full text-red-700 px-3 py-1.5 text-xs">
          -{item.offer} %
        </span>
      </div>
    </div>
  );
};
