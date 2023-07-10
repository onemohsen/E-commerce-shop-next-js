import React from "react";
import Clear from "./icons/Clear";

type Props = {
  title: string;
  closeHandler: () => void;
};

export default function Tag({ title, closeHandler }: Props) {
  return (
    <div className=" h-8 pl-2.5 pr-1.5 py-1.5 bg-white rounded border border-blue-600 items-center inline-flex">
      <div className="cursor-default text-neutral-600">{title}</div>
      <Clear
        className="relative w-5 h-5 cursor-pointer hover:fill-red-500"
        onClick={closeHandler}
      />
    </div>
  );
}
