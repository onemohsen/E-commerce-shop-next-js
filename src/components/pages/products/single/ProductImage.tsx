import { SingleProductContext } from "@/state/products/SingleProductContext";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {
  className: string;
};

export default function ProductImage({ className }: Props) {
  const { product } = useContext(SingleProductContext);

  const images = Array(6).fill(product.image);

  return (
    <div className={`${className}`}>
      <div className="mb-4 border p-5">
        <Image
          src={product.image}
          width={345}
          height={345}
          alt={product.title}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <Image
            className="border p-1"
            src={image}
            width={50}
            height={50}
            alt={product.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
