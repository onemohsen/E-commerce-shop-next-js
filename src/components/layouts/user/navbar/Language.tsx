import React from "react";
import { ArrowDown } from "@/components/commons/icons/Index";
import Image from "next/image";
import germany from "@/assets/images/countries/germany.png";

const Language = () => {
  return (
    <div className="flex space-x-5">
      <div className="flex space-x-2 items-center">
        <span>English, USD</span>
        <ArrowDown />
      </div>
      <div className="flex space-x-3 items-center">
        <span>Ship to</span>
        <Image src={germany} alt="germany" />
        <ArrowDown />
      </div>
    </div>
  );
};

export default Language;
