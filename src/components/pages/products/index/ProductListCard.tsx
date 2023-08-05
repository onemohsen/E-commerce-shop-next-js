import { Love } from "@/components/commons/icons/Index";
import RateBox from "@/components/commons/products/RateBox";
import { ProductType } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: ProductType;
};

export default function ProductListCard({ item }: Props) {
  return (
    <div className="flex">
      <div className="flex w-3/12 justify-center">
        <Link
          href={{
            pathname: "products/[id]",
            query: { id: item.id },
          }}
        >
          <Image src={item.image} width={180} height={180} alt={item.title} />
        </Link>
      </div>
      <div className="w-9/12 ">
        <div className="flex justify-between">
          <h2>{item.title}</h2>
          <Love
            className="h-10 w-10 cursor-pointer rounded border fill-current p-1.5 text-blue-600 hover:text-blue-900"
            isFill={false}
          />
        </div>
        <div className="space-y-2">
          <span className="text-xl font-bold">${item.price}</span>
          {item.oldPrice && item.price < item.oldPrice && (
            <span className="pl-2 text-gray-400 line-through">
              ${item.oldPrice}
            </span>
          )}
          <div className="flex space-x-4">
            <RateBox score={item.rate ?? 0} />
            <span className="text-gray-400">154 orders</span>
            <span className="text-green-600">Free Shipping</span>
          </div>
          <p className="text-gray-700">{item.summary}</p>
          <Link className="text-blue-600" href={`/products/${item.id}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
