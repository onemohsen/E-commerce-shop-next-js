import { DrowpdownType } from "@/models/Types";
import React, { useContext, useEffect, useMemo, useState } from "react";
import DropdownLessAndMore from "./DropdownLessAndMore";
import { useRouter } from "next/router";
import { DropdowContext } from "@/state/products/DropdownContex";

type Props = {
  item: DrowpdownType;
};

export default function DropdownCheckbox({ item }: Props) {
  const { query } = useRouter();

  const { maxItems, filterQuery } = useContext(DropdowContext);

  const initcheckBoxValue = useMemo(
    () => query[item.header]?.toString()?.split(",").map(Number) ?? [],
    [item.header, query]
  );

  const [checkBoxValue, setCheckBoxValue] =
    useState<number[]>(initcheckBoxValue);

  useEffect(() => {
    setCheckBoxValue(initcheckBoxValue);
  }, [initcheckBoxValue]);

  console.log("initcheckBoxValue", initcheckBoxValue, checkBoxValue);
  console.count(`dropdown checkbox run ${item.header}`);

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

  return (
    <>
      {item.items.slice(0, maxItems).map((i, index) => (
        <div className="py-1.5" key={`${item.header}-${i.id}-${i.id}`}>
          <input
            id={`${item.header}-${index}`}
            type="checkbox"
            name={`${item.header}[]`}
            value={i.id}
            checked={checkBoxValue.includes(i.id) ? true : false}
            onChange={checkboxChangeHandler}
          />
          <label htmlFor={`${item.header}-${index}`} className="pl-1">
            {i.name}
          </label>
        </div>
      ))}

      <DropdownLessAndMore item={item} />
    </>
  );
}
