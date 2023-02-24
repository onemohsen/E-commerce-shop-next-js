import React from "react";
import Menu from "./navbar/Menu";
import Language from "./navbar/Language";

const Navbar = () => {
  return (
    <nav className="pt-0.5 ">
      <div className="bg-white">
        <div className="container mx-auto flex justify-between py-3">
          <Menu />
          <Language />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
