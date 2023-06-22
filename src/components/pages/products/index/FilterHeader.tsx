import { Gridview, Listview } from "@/components/commons/icons/Index";
import React from "react";

type Props = {
  isGrid: boolean;
  onViewClickHandler: (isGridView: boolean) => void;
  total?: number;
};

export default function FilterHeader({
  isGrid,
  total,
  onViewClickHandler,
}: Props) {
  let iconClass = "w-8 h-8 border rounded-r p-1 cursor-pointer";

  return (
    <div className="bg-white p-4 mb-2 flex justify-between">
      <div>
        <span>{total} items in this</span>
        <span className="font-bold"> Category</span>
      </div>
      <div className="flex">
        <Gridview
          title="Grid view"
          onClick={() => onViewClickHandler(true)}
          className={`${iconClass} ${isGrid ? "bg-gray-100" : ""}`}
        />
        <Listview
          title="List view"
          onClick={() => onViewClickHandler(false)}
          className={`${iconClass} ${!isGrid ? "bg-gray-100" : ""}`}
        />
      </div>
    </div>
  );
}
