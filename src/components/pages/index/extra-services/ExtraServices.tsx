import React from "react";

// import Search from "@/components/pages/index/extra-services/icons/Search";
import {
  Search,
  Inventory,
  Send,
  Security,
} from "@/components/commons/icons/Index";

import image104 from "@/assets/images/home/services/image 104.jpg";
import image106 from "@/assets/images/home/services/image 106.jpg";
import image107 from "@/assets/images/home/services/image 107.jpg";
import image108 from "@/assets/images/home/services/image 108.jpg";
import { ExtraServiceType } from "@/components/pages/index/extra-services/ExtraServiceType";
import ExtraService from "./ExtraService";

export default function ExtraServices() {
  const services: ExtraServiceType[] = [
    {
      image: image104,
      description: "Source from Industry Hubs",
      icon: Search,
    },
    {
      image: image106,
      description: "Customize Your Products",
      icon: Inventory,
    },
    {
      image: image107,
      description: "Fast, reliable shipping by ocean or air",
      icon: Send,
    },
    {
      image: image108,
      description: "Product monitoring and inspection ",
      icon: Security,
    },
  ];

  return (
    <div className="space-y-5">
      <h2 className="font-bold">Our extra services</h2>
      <div className="grid grid-cols-4 gap-2">
        {services.map((item) => (
          <ExtraService item={item} key={item.description} />
        ))}
      </div>
    </div>
  );
}
