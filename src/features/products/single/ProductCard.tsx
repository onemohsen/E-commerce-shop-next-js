import { ProductType } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: ProductType;
  imageSize?: number;
  className?: string;
};

export default function ProductCard({
  item,
  imageSize = 75,
  className = "",
}: Props) {
  return (
    <Link
      key={item.id}
      href={`/products/${item.id}`}
      className={`${className}`}
    >
      <Image
        width={imageSize}
        height={imageSize}
        src={item.image}
        alt={item.title}
      />
      <div className="h-18 flex flex-col justify-between ">
        <span className="w-36 truncate" title={item.title}>
          {item.title}
        </span>
        <span className="block text-gray-400">${item.price}</span>
      </div>
    </Link>
  );
}
