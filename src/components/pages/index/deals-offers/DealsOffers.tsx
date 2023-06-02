import { Product } from "@/models/Product";
import React from "react";
import Image35 from "@/assets/images/home/deals-offers/image 35.jpg";
import { ProductOfferCard } from "./ProductOfferCard";
import dynamic from "next/dynamic";

type Props = {
  className: string;
};

type OfferProduct = Product & {
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
    },
    { id: 2, image: Image35.src, price: 2, title: "test2", offer: 25 },
    { id: 3, image: Image35.src, price: 3, title: "test3", offer: 25 },
    { id: 4, image: Image35.src, price: 4, title: "test4", offer: 25 },
    { id: 5, image: Image35.src, price: 5, title: "test5", offer: 25 },
  ];

  const CountDownComponent = dynamic(
    () => import("@/components/pages/index/deals-offers/CountDown"),
    { ssr: false }
  );

  let fiveDaysLater = new Date(today);
  fiveDaysLater.setDate(today.getDate() + 5);

  return (
    <div className={`${className}`}>
      <div className="w-1/4 h-56 overflow overflow-hidden p-5 border bg-white">
        <p className="font-bold">Deals and offers</p>
        <span className="text-xs text-gray-400">Hygiene equipments</span>
        <CountDownComponent
          date={fiveDaysLater}
          className="w-full flex space-x-1 mt-5"
        />
      </div>
      <div className="w-3/4 flex flex-wrap">
        {offerProducts.map((item) => (
          <ProductOfferCard
            key={item.id}
            item={item}
            className="w-1/5 bg-white p-4 border flex flex-col justify-between items-center  overflow-hidden "
          />
        ))}
      </div>
    </div>
  );
}
