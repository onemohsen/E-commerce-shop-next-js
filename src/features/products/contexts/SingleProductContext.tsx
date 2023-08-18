import { Product, ProductType } from "@/models/Product";
import { createContext } from "react";

type ContextType = {
  product: ProductType;
};

const initValue: ContextType = {
  product: new Product(),
};

export const SingleProductContext = createContext(initValue);
