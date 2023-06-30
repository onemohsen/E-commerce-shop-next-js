import React from "react";
import { ArrowDown, ArrowUp } from "@/components/commons/icons/Index";

type Props = {
  header: string;
  showDropdown: boolean;
  onClickHandler: () => void;
};

export default function DropdownHeader({
  header,
  showDropdown,
  onClickHandler,
}: Props) {
  return (
    <li
      className="font-bold flex justify-between items-center py-3 cursor-pointer"
      onClick={onClickHandler}
    >
      <span>{header}</span>
      {showDropdown && <ArrowUp className="mr-5" />}
      {!showDropdown && <ArrowDown className="mr-5" />}
    </li>
  );
}
