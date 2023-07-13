import { ProductType } from "@/models/Product";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  className: string;
  items: ProductType[];
};

export default function ProductYouMayLike({ className, items }: Props) {
  return (
    <div className={className}>
      <span className="mb-5 block">You may like</span>
      <div className="space-y-5">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            item={p}
            className="flex flex-row space-x-2"
          />
        ))}
      </div>
    </div>
  );
}
