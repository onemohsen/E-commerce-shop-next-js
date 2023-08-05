import { ProductType } from "@/models/Product";
import Image from "next/image";
import React from "react";

type Props = {
  item: ProductType;
  className: string;
  imageSize: number;
  imageClassName?: string;
  children?: React.ReactNode;
};

export default function ProductCartItem({
  item,
  className,
  imageClassName = "p-4",
  imageSize,
  children,
}: Props) {
  return (
    <div className={`${className}`}>
      <div
        className={`rounded-md bg-zinc-100 ${imageClassName}`}
        style={{ width: imageSize, height: imageSize }}
      >
        <Image
          width={imageSize}
          height={imageSize}
          src={item.image}
          alt={item.title}
        />
      </div>
      {children}
    </div>
  );
}
