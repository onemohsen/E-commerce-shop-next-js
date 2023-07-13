import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import { ProductPageContext } from "@/state/products/ProductsPageContext";

export default function FilterSidebar() {
  const { filtersData } = useContext(ProductPageContext);
  return (
    <div className="w-1/5 space-y-1 flex-inline">
      {Object.keys(filtersData).map((key, index) => {
        return (
          <div key={`${key}-${index}`}>
            <p className="w-full border" />
            <Dropdown header={key} item={filtersData[key]} />
          </div>
        );
      })}
    </div>
  );
}
