import React from "react";
import CardItem from "./CardItem";

type Product = {
  image: string;
  price: number;
  summary: string;
};

interface Props {
  items: Product[];
  className?: string;
}

function CardItems({ items, className }: Props) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        /* TODO: key must be changed */
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
}

export default CardItems;
