import { ProductType } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: ProductType;
}

function CardItem({ item }: Props) {
  return (
    <Link href={`/products/${item.id}`} className="border bg-white px-2 py-5">
      <div className="flex justify-center">
        <Image src={item.image} width={150} height={150} alt="t-shitr" />
      </div>
      <div className="mx-2 my-3">
        <span className="font-bold">${item.price}</span>
        <p className="text-gray-500">{item.summary}</p>
      </div>
    </Link>
  );
}

export default CardItem;
