import { ProductType } from "@/models/Product";
import React, { useContext, useState } from "react";
import ProductListCard from "./ProductListCard";
import ProductGridCard from "./ProductGridCard";
import FilterHeader from "./FilterHeader";
import { MetaPaginate } from "@/models/Types";
import Paginate from "@/components/commons/Paginate";
import CurrentFilters from "./CurrentFilters";

type Props = {
  products: ProductType[];
  productsPaginate?: MetaPaginate;
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white border rounded ">
          <ProductGridCard item={product} />
        </div>
      ))}
    </div>
  );
};

const ProductsList = ({ products }: Props) => {
  return (
    <div className="space-y-2">
      {products.map((product) => (
        <div key={product.id} className="p-5 bg-white border rounded ">
          <ProductListCard item={product} />
        </div>
      ))}
    </div>
  );
};

export default function FilterContent({ products, productsPaginate }: Props) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="w-4/5 px-5">
      <FilterHeader
        isGrid={isGridView}
        onViewClickHandler={(isGrid) => setIsGridView(isGrid)}
        total={productsPaginate?.total}
      />

      <CurrentFilters />

      {isGridView && <ProductsGrid products={products} />}
      {!isGridView && <ProductsList products={products} />}

      {productsPaginate && (
        <Paginate
          className="flex justify-end mt-5 space-x-3"
          meta={productsPaginate}
        />
      )}
    </div>
  );
}
