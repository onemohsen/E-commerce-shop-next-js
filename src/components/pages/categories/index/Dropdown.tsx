import { ArrowDown, ArrowUp } from "@/components/commons/icons/Index";
import { DrowpdownType } from "@/models/Types";
import React, { createContext, useState } from "react";
import DropdownList from "./DropdownList";
import DropdownCheckbox from "./DropdownCheckbox";
import { DropdowContext } from "@/state/products/DropdownContex";

type Props = {
  item: DrowpdownType;
  maxShowList?: number;
  show?: boolean;
  isCheckbox?: boolean;
  filterQuery: (query: number[]) => void;
};

export default function Dropdown({
  item,
  maxShowList = 4,
  show = true,
  isCheckbox = false,
  filterQuery,
}: Props) {
  const [maxItems, setMaxItems] = useState(maxShowList);
  const [showDropdown, setShowDropdown] = useState<boolean>(show);

  const buildItems = () => {
    if (!showDropdown) return;

    if (isCheckbox) return <DropdownCheckbox item={item} />;

    return <DropdownList item={item} />;
  };

  return (
    <DropdowContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        maxItems,
        setMaxItems,
        filterQuery,
      }}
    >
      <ul className="space-y-1">
        <li
          className="font-bold flex justify-between items-center py-3 cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>{item.header}</span>
          {showDropdown && <ArrowUp className="mr-5" />}
          {!showDropdown && <ArrowDown className="mr-5" />}
        </li>
        {buildItems()}
      </ul>
    </DropdowContext.Provider>
  );
}
