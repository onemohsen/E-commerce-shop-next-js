import { ArrowDown, ArrowUp } from "@/components/commons/icons/Index";
import { DrowpdownItemType } from "@/models/Types";
import React, { useState } from "react";

type DrowpdownType = {
  header: string;
  items: DrowpdownItemType[];
};

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

  const [checkBoxValue, setCheckBoxValue] = useState<number[]>([]);

  const buildItems = () => {
    if (!showDropdown) return;

    if (isCheckbox) return buildCheckbox();

    return buildList();
  };

  const buildLessAndMoreItem = () => {
    return (
      <>
        {item.items.length > 0 && (
          <li className="pb-4">
            <a
              className="text-blue-500 cursor-pointer"
              onClick={() =>
                item.items.length == maxItems
                  ? setMaxItems(() => 4)
                  : setMaxItems(() => item.items.length)
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
  };

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckBoxValue((prev) => {
      let checkboxValues = prev;

      if (event.target.checked) {
        checkboxValues = [...prev, +event?.target.value];
      } else {
        checkboxValues = prev.filter((item) => item != +event.target.value);
      }

      filterQuery(checkboxValues);
      return checkboxValues;
    });
  };

  const buildCheckbox = () => {
    return (
      <>
        {item.items.slice(0, maxItems).map((i, index) => (
          <div className="py-1.5" key={index}>
            <input
              id={`${item.header}-${index}`}
              type="checkbox"
              name={`${item.header}[]`}
              value={i.value}
              checked={checkBoxValue.includes(i.value) ? true : false}
              onChange={checkboxChangeHandler}
            />
            <label htmlFor={`${item.header}-${index}`} className="pl-1">
              {i.name}
            </label>
          </div>
        ))}
        {buildLessAndMoreItem()}
      </>
    );
  };

  const listClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    let value = event.currentTarget.getAttribute("value");
    let values = value ? [+value] : [];
    filterQuery(values);
  };

  const buildList = () => {
    return (
      <>
        {item.items.slice(0, maxItems).map((item, index) => (
          <li
            className="py-1.5 px-1 cursor-pointer hover:bg-blue-100"
            key={index}
            onClick={listClickHandler}
            value={item.value}
          >
            {item.name}
          </li>
        ))}
        {buildLessAndMoreItem()}
      </>
    );
  };

  return (
    <ul className="space-y-1">
      {checkBoxValue.join(",")}
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
  );
}
