import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";

interface Props {
  width?: number;
  height?: number;
}

const Logo = (props: Props) => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        width={props.width}
        height={props.height}
        priority
      />
    </>
  );
};

export default Logo;
