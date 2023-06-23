import { Brand } from "@/models/Brand";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { createContext } from "react";

type ContextType = {
    products: Product[],
    categories: Category[],
    brands: Brand[],
};

const initData: ContextType = {
    products: [],
    categories: [],
    brands: [],
};



export const ProductPageContext = createContext<ContextType>(initData);
