import { Product } from "@/models/Product";
import React, { useState } from "react";
import ProductListCard from "./ProductListCard";
import ProductGridCard from "./ProductGridCard";
import FilterHeader from "./FilterHeader";

type Props = {
  products: Product[];
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

export default function FilterContent({ products }: Props) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <>
      <FilterHeader
        isGrid={isGridView}
        onViewClickHandler={(isGrid) => setIsGridView(isGrid)}
      />
      {isGridView && <ProductsGrid products={products} />}
      {!isGridView && <ProductsList products={products} />}
    </>
  );
}
