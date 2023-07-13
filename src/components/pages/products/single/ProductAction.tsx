import React from "react";
import germany from "@/assets/images/countries/germany.png";
import Image from "next/image";
import { Verify, Language, Love } from "@/components/commons/icons/Index";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import LightButton from "@/components/commons/button/LightButton";

type Props = {
  className: string;
};

export default function ProductAction({ className }: Props) {
  return (
    <div className={className}>
      <div className="p-4 border rounded">
        <div className="flex items-center space-x-2">
          <p className="flex items-center justify-center w-10 h-10 text-center bg-teal-400 rounded">
            R
          </p>
          <span>Supplier Guanjoi Trading LLC</span>
        </div>
        <hr className="mx-5 mt-5 bg-red-900" />
        <div className="space-y-2">
          <div className="space-x-3">
            <Image src={germany} alt="germany" className="inline-block" />
            <span>Germany, Berlin</span>
          </div>
          <div className="flex items-center space-x-3">
            <Verify className="inline w-5 h-5 fill-gray-500" />
            <span>Verified Seller</span>
          </div>
          <div className="space-x-3">
            <Language className="inline w-5 h-5 fill-gray-500" />
            <span>Worldwide shipping</span>
          </div>
        </div>
        <div className="mt-8 space-y-2">
          <PrimaryButton title="Send inquiry" customClass="block w-full" />
          <LightButton
            title="Seller’s profile"
            customClass="block w-full text-blue-700"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2 text-blue-700 cursor-default">
        <Love className="inline-flex w-5 h-5 fill-blue-700" />
        <span>Save for later</span>
      </div>
    </div>
  );
}
