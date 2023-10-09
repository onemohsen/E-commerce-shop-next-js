import { useContext } from "react";
import { ProductPageContext } from "../contexts/ProductsPageContext";

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);

  if (!context) {
    throw new Error(
      "useProductPageContext must use in ProductPageContext Provider",
    );
  }

  return { ...context };
};
