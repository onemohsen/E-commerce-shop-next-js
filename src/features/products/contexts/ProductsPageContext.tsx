import type { ProductType } from "@/models/Product";
import type { MetaPaginate, ProductFilterType } from "@/models/Types";
import { createContext } from "react";

type ContexDataType = {
  filtersData: {
    [key: string]: ProductFilterType;
  };
  products: ProductType[];
  paginate?: MetaPaginate;
};

// type InitContextType = ContexDataType;

export const ProductPageContext = createContext<ContexDataType | null>(null);
