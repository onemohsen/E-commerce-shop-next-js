// @flow
import Image from "next/image";
import * as React from "react";

import { ProductCard } from "./ProductCard";
import { ProductCategoryType } from "./ProductCategoryType";

type Props = {
  item: ProductCategoryType;
  className?: string;
};

export const ProductCategoryBox = ({ item, className }: Props) => {
  return (
    <div className={className}>
      <div className="overflow relative w-1/4 overflow-hidden">
        <div className="absolute left-5 top-5 w-2/4">
          <span className=" font-bold">{item.category.name}</span>
          <button className=" mt-3 rounded bg-white px-3 py-2 hover:bg-gray-400 hover:text-white">
            Source now
          </button>
        </div>
        <Image
          src={item?.category.image ?? ""}
          alt={item?.category.name}
          width={600}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex w-3/4 flex-wrap">
        {item?.products.map((product) => (
          <ProductCard
            key={`${item.category.id}-${product?.id}`}
            item={product}
            className="w-1/4"
          />
        ))}
      </div>
    </div>
  );
};
