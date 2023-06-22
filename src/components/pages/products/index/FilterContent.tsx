import { Product } from "@/models/Product";
import React, { useState } from "react";
import ProductListCard from "./ProductListCard";
import ProductGridCard from "./ProductGridCard";
import FilterHeader from "./FilterHeader";
import { MetaPaginate } from "@/models/Types";
import Paginate from "@/components/commons/Paginate";

type Props = {
  products: Product[];
  paginate?: MetaPaginate;
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className=" bg-white border rounded ">
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
        <div key={product.id} className=" bg-white border rounded p-5">
          <ProductListCard item={product} />
        </div>
      ))}
    </div>
  );
};

export default function FilterContent({ products, paginate }: Props) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <>
      <FilterHeader
        isGrid={isGridView}
        onViewClickHandler={(isGrid) => setIsGridView(isGrid)}
        total={paginate?.total}
      />
      {isGridView && <ProductsGrid products={products} />}
      {!isGridView && <ProductsList products={products} />}
      {paginate && (
        <Paginate className="flex justify-end space-x-3 mt-5" meta={paginate} />
      )}
    </>
  );
}
