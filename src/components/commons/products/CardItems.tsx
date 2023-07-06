import React from "react";
import CardItem from "./CardItem";
import { ProductType } from "@/models/Product";

interface Props {
  items: ProductType[];
  className?: string;
}

function CardItems({ items, className }: Props) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        /* TODO: key must be changed */
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardItems;
