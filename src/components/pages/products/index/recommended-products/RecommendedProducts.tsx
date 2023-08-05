import React from "react";
import { ProductType } from "@/models/Product";
import CardItems from "./CardItems";

function RecommendedProducts() {
  const items: ProductType[] = [
    {
      id: 1,
      title: "product",
      image: "https://picsum.photos/id/1/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 2,
      title: "product",
      image: "https://picsum.photos/id/2/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 3,
      title: "product",
      image: "https://picsum.photos/id/3/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 4,
      title: "product",
      image: "https://picsum.photos/id/4/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 5,
      title: "product",
      image: "https://picsum.photos/id/5/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 6,
      title: "product",
      image: "https://picsum.photos/id/6/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 7,
      title: "product",
      image: "https://picsum.photos/id/7/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 8,
      title: "product",
      image: "https://picsum.photos/id/8/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 9,
      title: "product",
      image: "https://picsum.photos/id/9/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
    {
      id: 10,
      title: "product",
      image: "https://picsum.photos/id/10/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
      quantity: 1,
    },
  ];

  return (
    <div>
      <h3 className="pb-5 text-lg font-bold">Recommended Items</h3>
      <CardItems items={items} className="grid grid-cols-5 gap-5" />
    </div>
  );
}

export default RecommendedProducts;
