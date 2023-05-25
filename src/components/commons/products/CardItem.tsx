import Image from "next/image";
import React from "react";

interface Props {
  item: {
    image: string;
    price: number;
    summary: string;
  };
}

function CardItem({ item }: Props) {
  return (
    <div className="bg-white px-2 py-5 ">
      <div className="flex justify-center">
        <Image src={item.image} width={200} height={200} alt="t-shitr" />
      </div>
      <div className="mx-2">
        <span className="font-bold">${item.price}</span>
        <p className="text-gray-500">{item.summary}</p>
      </div>
    </div>
  );
}

export default CardItem;
