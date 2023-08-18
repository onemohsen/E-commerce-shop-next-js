import Image from "next/image";
import React from "react";
import { ExtraServiceType } from "@/features/index/extra-services/ExtraServiceType";

interface Props {
  item: ExtraServiceType;
}

export default function ExtraService({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className="">
      <div className="relative">
        <Image src={item.image} alt={item.description} className="" />
        <div className="absolute top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute top-24 right-2 rounded-full bg-sky-200 p-2">
          <Icon />
        </div>
      </div>
      <p className="bg-white px-5 py-6 text-sm">{item.description}</p>
    </div>
  );
}
