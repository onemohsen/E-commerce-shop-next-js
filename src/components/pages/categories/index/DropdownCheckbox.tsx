import { DrowpdownItemType } from "@/models/Types";
import React from "react";

type Props = {
  item: DrowpdownItemType;
  id: string;
};

export default function DropdownCheckbox({ item, id }: Props) {
  const onChangeHandler = () => {};

  return (
    <div className="py-1.5">
      <input
        id={id}
        type="checkbox"
        name={`${item.name}`}
        value={item.name}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{item.name}</label>
    </div>
  );
}
