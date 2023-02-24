import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import Action from "./header/Action";
import ContainerWrapper from "../../commons/wrapper/ContainerWrapper";

const Header = () => {
  return (
    <ContainerWrapper className="h-[5.3rem] grid content-center">
      <div className="grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <Logo width={150} />
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
