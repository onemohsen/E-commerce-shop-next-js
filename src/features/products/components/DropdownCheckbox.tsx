import { ProductFilterType } from "@/models/Types";
import React, { useState } from "react";
import DropdownLessAndMore from "./DropdownLessAndMore";
import DropdownHeader from "./DropdownHeader";

type Props = {
  header: string;
  item: ProductFilterType;
  onClickHandler: (value: number[]) => void;
};

export default function DropdownCheckbox({
  header,
  item,
  onClickHandler,
}: Props) {
  const { maxShowList, show, selected, items } = item;

  const itemChecked = selected.map((i) => +i);

  const [maxItems, setMaxItems] = useState(maxShowList ?? 0);
  const [showDropdown, setShowDropdown] = useState<boolean>(show);

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let checkboxValues = itemChecked;

    if (event.target.checked) {
      checkboxValues = [...itemChecked, +event?.target.value];
    } else {
      checkboxValues = itemChecked.filter(
        (item) => item != +event.target.value,
      );
    }
    onClickHandler(checkboxValues);
  };

  const lessAndMoreClickHandler = () => {
    maxItems != items.length
      ? setMaxItems(items.length)
      : setMaxItems(maxShowList ?? 0);
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
        <div className="py-1.5" key={`${header}-${i.id}-${i.id}`}>
          <input
            id={`${header}-${index}`}
            type="checkbox"
            name={`${header}[]`}
            value={i.id}
            checked={itemChecked.includes(i.id) ? true : false}
            onChange={checkboxChangeHandler}
          />
          <label htmlFor={`${header}-${index}`} className="pl-1">
            {i.name}
          </label>
        </div>
      ))}

      <DropdownLessAndMore
        showMore={maxItems != items.length}
        onClickHandler={lessAndMoreClickHandler}
      />
    </ul>
  );
}
