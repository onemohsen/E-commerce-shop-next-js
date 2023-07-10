import { DrowpdownItemType, ProductFilterType } from "@/models/Types";
import React, { useState } from "react";
import DropdownLessAndMore from "./DropdownLessAndMore";
import DropdownHeader from "./DropdownHeader";

type Props = {
  header: string;
  item: ProductFilterType;
  onClickHandler: (value: number[]) => void;
};

type ListItemProps = {
  item: DrowpdownItemType;
  selectedList: string[];
  onClickHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const ListItem = ({ item, selectedList, onClickHandler }: ListItemProps) => {
  const isActive = selectedList.includes(item.id?.toString());
  const activeItemClass = isActive ? "bg-blue-500 text-white rounded" : "";

  return (
    <li
      className={`py-1.5 px-1 cursor-pointer hover:bg-blue-100 ${activeItemClass}`}
      onClick={(event) => onClickHandler(event)}
      value={item.id}
    >
      {item.name}
    </li>
  );
};

export default function DropdownList({ header, item, onClickHandler }: Props) {
  const { maxShowList, show, selected, items } = item;

  const [maxItems, setMaxItems] = useState(maxShowList ?? 0);
  const [showDropdown, setShowDropdown] = useState<boolean>(show);

  const listClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    let value = event.currentTarget.getAttribute("value");
    onClickHandler(value ? [+value] : []);
  };

  const dropdownHeader = () => {
    return (
      <DropdownHeader
        header={header}
        showDropdown={showDropdown}
        onClickHandler={() => setShowDropdown((prev) => !prev)}
      />
    );
  };

  if (!showDropdown) {
    return dropdownHeader();
  }

  return (
    <ul className="space-y-1">
      {dropdownHeader()}

      {items.slice(0, maxItems).map((i, index) => (
        <ListItem
          item={i}
          key={`${header}-${index}`}
          onClickHandler={listClickHandler}
          selectedList={selected}
        />
      ))}

      {items.length > 0 && (
        <DropdownLessAndMore
          showMore={maxItems != items.length}
          onClickHandler={() => {
            maxItems == maxShowList
              ? setMaxItems(items.length)
              : setMaxItems(4);
          }}
        />
      )}

      {items.length == 0 && (
        <span className="text-xs text-gray-400">filter empty</span>
      )}
    </ul>
  );
}
