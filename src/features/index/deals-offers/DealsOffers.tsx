import { ProductType } from "@/models/Product";
import React from "react";
import Image35 from "@/assets/images/home/deals-offers/image 35.jpg";
import { ProductOfferCard } from "./ProductOfferCard";
import dynamic from "next/dynamic";

type Props = {
  className: string;
};

type OfferProduct = ProductType & {
  offer: number;
};

const today = new Date();

export default function DealsOffers({ className }: Props) {
  const offerProducts: OfferProduct[] = [
    {
      id: 1,
      image: Image35.src,
      price: 1,
      title: "Smart watches",
      offer: 25,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://picsum.photos/id/22/300",
      price: 2,
      title: "test2",
      offer: 25,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://picsum.photos/id/23/300",
      price: 3,
      title: "test3",
      offer: 25,
      quantity: 1,
    },
    {
      id: 4,
      image: "https://picsum.photos/id/24/300",
      price: 4,
      title: "test4",
      offer: 25,
      quantity: 1,
    },
    {
      id: 5,
      image: "https://picsum.photos/id/35/300",
      price: 5,
      title: "test5",
      offer: 25,
      quantity: 1,
    },
  ];

  const CountDownComponent = dynamic(
    () => import("@/features/index/deals-offers/CountDown"),
    { ssr: false },
  );

  let fiveDaysLater = new Date(today);
  fiveDaysLater.setDate(today.getDate() + 5);

  return (
    <div className={`${className}`}>
      <div className="overflow h-56 w-1/4 overflow-hidden border bg-white p-5">
        <p className="font-bold">Deals and offers</p>
        <span className="text-xs text-gray-400">Hygiene equipments</span>
        <CountDownComponent
          date={fiveDaysLater}
          className="mt-5 flex w-full space-x-1"
        />
      </div>
      <div className="flex w-3/4 flex-wrap">
        {offerProducts.map((item) => (
          <ProductOfferCard
            key={item.id}
            item={item}
            className="flex w-1/5 flex-col items-center justify-between overflow-hidden border bg-white p-4 "
          />
        ))}
      </div>
    </div>
  );
}
