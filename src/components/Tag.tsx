import React from "react";
import Clear from "./icons/Clear";

type Props = {
  title: string;
  closeHandler: () => void;
};

export default function Tag({ title, closeHandler }: Props) {
  return (
    <div className=" inline-flex h-8 items-center rounded border border-blue-600 bg-white py-1.5 pl-2.5 pr-1.5">
      <div className="cursor-default text-neutral-600">{title}</div>
      <Clear
        className="relative h-5 w-5 cursor-pointer hover:fill-red-500"
        onClick={closeHandler}
      />
    </div>
  );
}
