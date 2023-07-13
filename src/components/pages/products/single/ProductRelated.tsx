import { ProductType } from "@/models/Product";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  products: ProductType[];
  className?: string;
};

export default function ProductRelated({ products, className }: Props) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-5">Related products</h3>
      <div className="flex flex-wrap ">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            item={p}
            imageSize={135}
            className="flex flex-col w-1/6 items-center"
          />
        ))}

        {!products.length && (
          <span className="text-gray-400">No related products found.</span>
        )}
      </div>
    </div>
  );
}
