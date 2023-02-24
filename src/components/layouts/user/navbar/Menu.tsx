import { ArrowDown, Menu as MenuIcon } from "@/components/commons/icons/Index";
import { Menu } from "@/models/custom/Menu";
import React from "react";

const Menu = () => {
  const items: Menu[] = [
    { name: "All Category", route: "test" },
    { name: "Hot Offers", route: "test" },
    { name: "Gift boxes", route: "test" },
    { name: "Projects", route: "test" },
    { name: "Menu item", route: "test" },
  ];

  return (
    <div className="flex space-x-4">
      <MenuIcon />

      <ul className="flex space-x-5">
        {items.map((item: Menu) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        <li className="dropdown flex space-x-2 items-center">
          <span>Help</span>
          <ArrowDown />
        </li>
      </ul>
    </div>
  );
};

export default Menu;