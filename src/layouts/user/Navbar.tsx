import React from "react";
import Menu from "./navbar/Menu";
import Language from "./navbar/Language";
import ContainerWrapper from "../../components/wrapper/ContainerWrapper";

const Navbar = () => {
  return (
    <nav className="pt-0.5 ">
      <div className="bg-white">
        <ContainerWrapper className="flex justify-between py-3">
          <Menu />
          <Language />
        </ContainerWrapper>
      </div>
    </nav>
  );
};

export default Navbar;
