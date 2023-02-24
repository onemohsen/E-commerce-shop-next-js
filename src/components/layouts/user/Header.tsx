import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import Action from "./header/Action";

const Header = () => {
  return (
    <div className="container mx-auto h-[5.3rem] grid content-center">
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
    </div>
  );
};

export default Header;
