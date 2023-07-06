import { ProductType } from "@/models/Product";
import { MetaPaginate, ProductFilterType } from "@/models/Types";
import { Dispatch, SetStateAction, createContext } from "react";
import React, { useState } from "react";

type ActionType = {
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  setProductPaginate: Dispatch<SetStateAction<MetaPaginate | undefined>>;
};

type ContexDataType = {
  products: ProductType[];
  productPaginate?: MetaPaginate;
  filtersData: {
    [key: string]: ProductFilterType;
  };
};

type InitContextType = ContexDataType & ActionType;

type ProviderProps = {
  children: React.ReactNode;
  values: ContexDataType;
};

export const initFiltersData: InitContextType = {
  products: [],
  productPaginate: undefined,
  filtersData: {
    categories: {
      maxShowList: 4,
      show: true,
      items: [],
      selected: [],
    },
    brands: {
      maxShowList: 5,
      show: true,
      isCheckBox: true,
      items: [],
      selected: [],
    },
    features: {
      maxShowList: 5,
      show: true,
      isCheckBox: true,
      items: [
        { name: "Metallic", id: 1 },
        { name: "Plastic cover", id: 2 },
        { name: "8GB Ram", id: 3 },
        { name: "Super power", id: 4 },
        { name: "Large Memory", id: 5 },
        { name: "test2", id: 6 },
        { name: "test3", id: 7 },
      ],
      selected: [],
    },
    priceRange: {
      show: false,
      items: [],
      selected: [],
    },
    condition: {
      show: false,
      items: [],
      selected: [],
    },
    ratings: {
      show: false,
      items: [],
      selected: [],
    },
    manufacturer: {
      show: false,
      items: [],
      selected: [],
    },
  },
  setProducts: () => {},
  setProductPaginate: () => {},
};

export const ProductPageContext =
  createContext<InitContextType>(initFiltersData);

export const ProductPageProvider = ({ children, values }: ProviderProps) => {
  const [products, setProducts] = useState(values.products);
  const [productPaginate, setProductPaginate] = useState(
    values.productPaginate
  );
  const filtersData = values.filtersData;
  return (
    <ProductPageContext.Provider
      value={{
        products,
        productPaginate,
        filtersData,
        setProducts,
        setProductPaginate,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
