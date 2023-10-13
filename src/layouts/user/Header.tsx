import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import Action from "./header/Action";
import ContainerWrapper from "../../components/wrapper/ContainerWrapper";
import Link from "next/link";

const Header = () => {
  return (
    <ContainerWrapper className="grid h-[5.3rem] content-center">
      <div className="flex">
        <div className="flex w-1/3 justify-start">
          <Link href={{ pathname: "/" }}>
            <Logo width={150} />
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <SearchBar />
        </div>
        <div className="flex w-1/3 justify-end">
          <Action />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Header;
