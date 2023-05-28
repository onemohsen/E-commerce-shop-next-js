import Image, { StaticImageData } from "next/image";
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
        <div className="absolute bg-black top-0 w-full h-full opacity-50"></div>
        <div className="absolute top-24 right-2 bg-sky-200 rounded-full p-2">
          <Icon />
        </div>
      </div>
      <p className="text-sm bg-white px-5 py-6">{item.description}</p>
    </div>
  );
}
