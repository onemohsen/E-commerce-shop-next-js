import Breadcrumbs from "@/components/commons/Breadcrumbs";
import Subscribe from "@/components/commons/Subscribe";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import { makeQueryParams } from "@/services/helpers";
import { Product } from "@/models/Product";
import {
  BreadcrumbsType,
  MetaPaginate,
  ProductFilterType,
} from "@/models/Types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { createContext } from "react";
import FilterSidebar from "@/components/pages/products/index/FilterSidebar";
import FilterContent from "@/components/pages/products/index/FilterContent";
import { Category } from "@/models/Category";
import { Brand } from "@/models/Brand";
import { ProductPageContext } from "@/state/products/ProductsPageContext";

type ServerProps = {
  products: Product[];
  paginate?: MetaPaginate;
  categories: Category[];
  brands: Brand[];
};

let staticFilters: ProductFilterType[] = [
  {
    header: "features",
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
  },
  {
    header: "price range",
    show: false,
    items: [],
  },
  {
    header: "condition",
    show: false,
    items: [],
  },
  {
    header: "ratings",
    show: false,
    items: [],
  },
  {
    header: "manufacturer",
    show: false,
    items: [],
  },
];

export default function Index({
  products,
  paginate,
  categories,
  brands,
}: ServerProps) {
  const breadcrumbs: BreadcrumbsType[] = [
    { name: "Home", href: "/" },
    { name: "Products" },
  ];

  const filters = [
    {
      header: "categories",
      maxShowList: 4,
      show: true,
      items: categories,
    },
    {
      header: "brands",
      maxShowList: 5,
      show: true,
      isCheckBox: true,
      items: brands,
    },
    ...staticFilters,
  ];

  const router = useRouter();

  const makeFilterQuery = (filter: ProductFilterType, values: number[]) => {
    const params = filter?.isCheckBox ? router.query : {};
    const queryString = makeQueryParams(
      { ...params, page: 1 },
      filter.header,
      values
    );
    router.push(`${location.pathname}${queryString}`);
  };

  return (
    <ContainerWrapper className="py-5 space-y-5">
      <ProductPageContext.Provider value={{ categories, products, brands }}>
        <Breadcrumbs items={breadcrumbs} />
        <div className="flex">
          <div className="w-1/5 ">
            <FilterSidebar items={filters} makeFilterQuery={makeFilterQuery} />
          </div>
          <div className="w-4/5 px-5">
            <FilterContent products={products} paginate={paginate} />
          </div>
        </div>

        <div className="bg-gray-200 py-10">
          <Subscribe />
        </div>
      </ProductPageContext.Provider>
    </ContainerWrapper>
  );
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  query,
}) => {
  const queryString = makeQueryParams(query);

  const baseUrl = process.env.BASE_API_URL || "http://localhost:3000/api";

  try {
    const [productsRes, categoroesRes, brandsRes] = await Promise.all([
      fetch(`${baseUrl}/products${queryString}`),
      fetch(`${baseUrl}/categories`),
      fetch(`${baseUrl}/brands`),
    ]);

    const [products, categories, brands] = await Promise.all([
      productsRes.json(),
      categoroesRes.json(),
      brandsRes.json(),
    ]);

    return {
      props: {
        products: products.data,
        paginate: products.meta?.paginate ?? undefined,
        categories: categories.data,
        brands: brands.data,
      },
    };
  } catch (error) {
    throw error;
    /*  return {
      notFound: true,
    }; */
  }
};
