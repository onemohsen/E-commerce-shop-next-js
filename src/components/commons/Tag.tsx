import React from "react";
import Clear from "./icons/Clear";

type Props = {
  title: string;
};

export default function Tag({ title }: Props) {
  return (
    <div className=" h-8 pl-2.5 pr-1.5 py-1.5 bg-white rounded border border-blue-600 items-center inline-flex">
      <div className="text-neutral-600  cursor-default">{title}</div>
      <Clear className="w-5 h-5 relative cursor-pointer hover:text-blue-600" />
    </div>
  );
}
