import React, { useEffect, useState } from "react";
import ProductListCard from "./ProductListCard";
import ProductGridCard from "./ProductGridCard";
import FilterHeader from "./FilterHeader";
import Paginate from "@/components/Paginate";
import CurrentFilters from "./CurrentFilters";
import { useProductPageContext } from "../hooks/useProductPageContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ProductsGrid = () => {
  const { products } = useProductPageContext();

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="rounded border bg-white ">
          <ProductGridCard item={product} />
        </div>
      ))}
    </div>
  );
};

const ProductsList = () => {
  const { products } = useProductPageContext();

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <div key={product.id} className="rounded border bg-white p-5 ">
          <ProductListCard item={product} />
        </div>
      ))}
    </div>
  );
};

const PRODUCT_VIEW_STORAGE_KEY = "products-is-grid-view";

export function FilterContent() {
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const { paginate } = useProductPageContext();
  const { set, get } = useLocalStorage();

  if (!get(PRODUCT_VIEW_STORAGE_KEY)) {
    set(PRODUCT_VIEW_STORAGE_KEY, isGridView);
  }

  useEffect(() => {
    const gridviewStorage = get(PRODUCT_VIEW_STORAGE_KEY) !== "false";
    setIsGridView(gridviewStorage);
  }, [get]);

  return (
    <div className="w-4/5 px-5">
      <FilterHeader
        isGrid={isGridView}
        onViewClickHandler={(isGrid) => {
          setIsGridView(isGrid);
          set(PRODUCT_VIEW_STORAGE_KEY, isGrid);
        }}
        total={paginate?.total}
      />

      <CurrentFilters />

      {isGridView && <ProductsGrid />}
      {!isGridView && <ProductsList />}

      {paginate && (
        <Paginate className="mt-5 flex justify-end space-x-3" meta={paginate} />
      )}
    </div>
  );
}
