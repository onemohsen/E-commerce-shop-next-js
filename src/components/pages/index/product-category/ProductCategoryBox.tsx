// @flow
import Image from "next/image";
import * as React from "react";

import { ProductCard } from "./ProductCard";
import { ProductCategoryType } from "./ProductCategoryType";

type Props = {
  item: ProductCategoryType;
};

export const ProductCategoryBox = ({ item }: Props) => {
  return (
    <div className="w-full flex">
      <div className="w-1/4 h-56 overflow overflow-hidden relative">
        <div className="absolute left-5 top-5 w-2/4">
          <span className=" font-bold">{item.category.name}</span>
          <button className=" px-3 py-2 mt-3 rounded bg-white hover:bg-gray-400 hover:text-white">
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
      <div className="w-3/4 flex flex-wrap">
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
