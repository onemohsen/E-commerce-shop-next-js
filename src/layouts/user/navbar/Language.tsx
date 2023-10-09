import React from "react";
import { ArrowDown } from "@/components/icons";
import Image from "next/image";
import germany from "@/assets/images/countries/germany.png";

const Language = () => {
  return (
    <div className="flex space-x-5">
      <div className="flex items-center space-x-2">
        <span>English, USD</span>
        <ArrowDown />
      </div>
      <div className="flex items-center space-x-3">
        <span>Ship to</span>
        <Image src={germany} alt="germany" />
        <ArrowDown />
      </div>
    </div>
  );
};

export default Language;
