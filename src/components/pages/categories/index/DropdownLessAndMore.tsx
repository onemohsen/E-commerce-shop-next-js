import { DrowpdownType } from "@/models/Types";
import { DropdowContext } from "@/state/products/DropdownContex";
import React, { useContext } from "react";

type Props = {
  item: DrowpdownType;
};

export default function DropdownLessAndMore({ item }: Props) {
  const { maxItems, setMaxItems } = useContext(DropdowContext);

  return (
    <>
      {item.items.length > 0 && (
        <li className="pb-4">
          <a
            className="text-blue-500 cursor-pointer"
            onClick={() =>
              item.items.length == maxItems
                ? setMaxItems(4)
                : setMaxItems(item.items.length)
            }
          >
            {item.items.length == maxItems ? "Less" : "See all"}
          </a>
        </li>
      )}
      {item.items.length == 0 && (
        <span className="text-xs text-gray-400">filter empty</span>
      )}
    </>
  );
}
