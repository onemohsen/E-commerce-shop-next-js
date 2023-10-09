import { Gridview, Listview } from "@/components/icons/Index";
import { ProductPageContext } from "@/features/products/contexts/ProductsPageContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

type Props = {
  isGrid: boolean;
  // eslint-disable-next-line no-unused-vars
  onViewClickHandler: (isGridView: boolean) => void;
  total?: number;
};

export default function FilterHeader({
  isGrid,
  total,
  onViewClickHandler,
}: Props) {
  let iconClass = "w-8 h-8 border rounded-r p-1 cursor-pointer";

  const { filtersData } = useContext(ProductPageContext);
  const { query } = useRouter();

  const activeCategory = filtersData.categories.items.find((category) => {
    const queryParamCateory = query.categories?.toString().split(",")[0] ?? 0;
    return category.id == queryParamCateory;
  });

  return (
    <div className="mb-2 flex justify-between bg-white p-4">
      <div>
        <span>{total} items in </span>
        <span className="font-bold">
          {activeCategory?.name ?? "this category"}
        </span>
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
