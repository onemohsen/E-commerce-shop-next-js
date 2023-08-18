import { Love } from "@/components/icons/Index";
import RateBox from "@/components/products/RateBox";
import { ProductType } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: ProductType;
};

export default function ProductGridCard({ item }: Props) {
  return (
    <div className="flex h-full w-full">
      <div className="mx-5 flex w-full flex-col ">
        <div className="flex justify-center p-8">
          <Link
            href={{
              pathname: "products/[id]",
              query: { id: item.id },
            }}
          >
            <Image src={item.image} width={200} height={200} alt={item.title} />
          </Link>
        </div>
        <div className="w-full border-b border-gray-200"></div>
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-lg font-bold">${item.price}</span>
              {item.oldPrice && item.price < item.oldPrice && (
                <span className="pl-2 text-gray-400 line-through">
                  ${item.oldPrice}
                </span>
              )}
              <RateBox score={item.rate ?? 0} />
            </div>
            <Love
              className="h-10 w-10 cursor-pointer rounded border fill-current p-1.5 text-blue-600 hover:text-blue-900"
              isFill={false}
            />
          </div>
          <h2 className="text-gray-700">{item.title}</h2>
        </div>
      </div>
    </div>
  );
}
