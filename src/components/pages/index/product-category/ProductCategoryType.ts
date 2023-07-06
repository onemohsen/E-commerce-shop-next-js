import { Category } from "@/models/Category";
import { ProductType } from "@/models/Product";

export type ProductCategoryType = {
  category: Category;
  products: ProductType[];
};