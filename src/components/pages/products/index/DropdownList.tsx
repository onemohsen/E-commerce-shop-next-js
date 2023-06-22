import { DrowpdownItemType, DrowpdownType } from "@/models/Types";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import DropdownLessAndMore from "./DropdownLessAndMore";
import { DropdowContext } from "@/state/products/DropdownContex";

type Props = {
  item: DrowpdownType;
};

export default function DropdownList({ item }: Props) {
  const { query } = useRouter();

  const { maxItems, filterQuery } = useContext(DropdowContext);

  const listClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    let value = event.currentTarget.getAttribute("value");
    let values = value ? [+value] : [];
    filterQuery(values);
  };

  const ListItem = ({ item }: { item: DrowpdownItemType }) => {
    const activeItemClass =
      query?.categories == item.value?.toString()
        ? "bg-blue-500 text-white rounded"
        : "";

    return (
      <li
        className={`py-1.5 px-1 cursor-pointer hover:bg-blue-100 ${activeItemClass}`}
        onClick={(event) => listClickHandler(event)}
        value={item.value}
      >
        {item.name}
      </li>
    );
  };

  return (
    <>
      {item.items.slice(0, maxItems).map((i, index) => (
        <ListItem item={i} key={index} />
      ))}

      <DropdownLessAndMore item={item} />
    </>
  );
}
