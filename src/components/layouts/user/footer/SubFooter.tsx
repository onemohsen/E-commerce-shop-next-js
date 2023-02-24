import React from "react";
import UsaImage from "@/assets/images/countries/us.jpg";
import Image from "next/image";
import ArrowDown from "@/components/commons/icons/ArrowDown";

const SubFooter = () => {
  return (
    <div className="h-14 flex justify-between ">
      <span className="flex items-center">© 2023 Ecommerce. </span>
      <div className="flex  items-center space-x-1.5">
        <Image src={UsaImage} alt="usa country" />
        <span>English</span>
        <ArrowDown />
      </div>
    </div>
  );
};

export default SubFooter;
