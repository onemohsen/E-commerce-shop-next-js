import { Product } from "@/models/Product";
import { MetaPaginate, ProductFilterType } from "@/models/Types";
import { createContext } from "react";

type ContextType = {
    products: Product[],
    productPaginate?: MetaPaginate,
    filtersData: {
        [key: string]: ProductFilterType
    }
};

export const initFiltersData: ContextType = {
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
};



export const ProductPageContext = createContext<ContextType>(initFiltersData);
