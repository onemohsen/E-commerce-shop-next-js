import Image from "next/image";
import React from "react";
import { ExtraServiceType } from "@/components/pages/index/extra-services/ExtraServiceType";

interface Props {
  item: ExtraServiceType;
}

export default function ExtraService({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className="">
      <div className="relative">
        <Image src={item.image} alt={item.description} className="" />
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute p-2 rounded-full top-24 right-2 bg-sky-200">
          <Icon />
        </div>
      </div>
      <p className="px-5 py-6 text-sm bg-white">{item.description}</p>
    </div>
  );
}
