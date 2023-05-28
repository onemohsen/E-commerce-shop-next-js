import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export type ProductCategoryType = {
    category: Category;
    products: Product[];
  };