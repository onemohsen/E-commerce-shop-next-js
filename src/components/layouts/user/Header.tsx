import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import Action from "./header/Action";
import ContainerWrapper from "../../commons/wrapper/ContainerWrapper";
import Link from "next/link";

const Header = () => {
  return (
    <ContainerWrapper className="grid h-[5.3rem] content-center">
      <div className="grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <Link href={{ pathname: "/" }}>
            <Logo width={150} />
          </Link>
        </div>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <div className="flex justify-end">
          <Action />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Header;
