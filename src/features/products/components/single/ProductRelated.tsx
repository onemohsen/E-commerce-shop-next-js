import { ProductType } from "@/models/Product";
import React from "react";
import ProductCard from "./ProductCard";
import BoxWrapper from "@/components/wrapper/BoxWrapper";

type Props = {
  products: ProductType[];
  className?: string;
};

export function ProductRelated({ products, className }: Props) {
  return (
    <BoxWrapper className={className} title="Related products">
      <div className="flex flex-wrap ">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            item={p}
            imageSize={135}
            className="flex w-1/6 flex-col items-center"
          />
        ))}

        {!products.length && (
          <span className="text-gray-400">No related products found.</span>
        )}
      </div>
    </BoxWrapper>
  );
}
