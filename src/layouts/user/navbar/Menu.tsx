import { ArrowDown, Menu as MenuIcon } from "@/components/icons/Index";
import { MenuType } from "@/models/custom/MenuType";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const items: MenuType[] = [
    { name: "Hot Offers", route: "test" },
    { name: "Gift boxes", route: "test" },
    { name: "Projects", route: "test" },
    { name: "Menu item", route: "test" },
  ];

  return (
    <div className="flex space-x-4">
      <MenuIcon />

      <ul className="flex space-x-5">
        <li>
          <Link href={{ pathname: "/products" }}>All Products</Link>
        </li>
        {items.map((item: MenuType) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        <li className="dropdown flex items-center space-x-2">
          <span>Help</span>
          <ArrowDown />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
