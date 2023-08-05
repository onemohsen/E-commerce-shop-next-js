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
      <div className="flex max-h-[120px] w-full justify-center">
        <Image src={item.image} alt={item.title} width={120} height={120} />
      </div>
      <div className="w-full space-y-1 text-center">
        <span title={item.title} className="block truncate">
          {item.title}
        </span>
        <span className="rounded-full bg-red-200 px-3 py-1.5 text-xs text-red-700">
          -{item.offer} %
        </span>
      </div>
    </div>
  );
};
