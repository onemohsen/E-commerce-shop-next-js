import { ProductType } from "@/models/Product";
import React from "react";
import ProductCard from "./ProductCard";
import BoxWrapper from "@/components/commons/wrapper/BoxWrapper";

type Props = {
  className: string;
  items: ProductType[];
};

export default function ProductYouMayLike({ className, items }: Props) {
  return (
    <BoxWrapper className={className} title="You may like">
      <div className="space-y-5">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            item={p}
            className="flex flex-row space-x-2"
          />
        ))}
      </div>
    </BoxWrapper>
  );
}
