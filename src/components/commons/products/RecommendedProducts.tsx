import React from "react";
import CardItems from "./CardItems";
import { Product } from "@/models/Product";

function RecommendedProducts() {
  const items: Product[] = [
    {
      id: 1,
      title: "product",
      image: "https://picsum.photos/id/1/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 2,
      title: "product",
      image: "https://picsum.photos/id/2/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 3,
      title: "product",
      image: "https://picsum.photos/id/3/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 4,
      title: "product",
      image: "https://picsum.photos/id/4/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 5,
      title: "product",
      image: "https://picsum.photos/id/5/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 6,
      title: "product",
      image: "https://picsum.photos/id/6/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 7,
      title: "product",
      image: "https://picsum.photos/id/7/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 8,
      title: "product",
      image: "https://picsum.photos/id/8/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 9,
      title: "product",
      image: "https://picsum.photos/id/9/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
    {
      id: 10,
      title: "product",
      image: "https://picsum.photos/id/10/100",
      price: 10.3,
      summary: "T-shirts with multiple colors, for man",
    },
  ];

  return (
    <div>
      <h3 className="font-bold text-lg pb-5">Recommended Items</h3>
      <CardItems items={items} className="grid grid-cols-5 gap-5" />
    </div>
  );
}

export default RecommendedProducts;
