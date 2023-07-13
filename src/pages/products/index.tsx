import Breadcrumbs from "@/components/commons/Breadcrumbs";
import Subscribe from "@/components/commons/Subscribe";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import { makeQueryParams } from "@/services/helpers";
import { ProductType } from "@/models/Product";
import { BreadcrumbsType, MetaPaginate } from "@/models/Types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import FilterSidebar from "@/components/pages/products/index/FilterSidebar";
import FilterContent from "@/components/pages/products/index/FilterContent";
import { Category } from "@/models/Category";
import { Brand } from "@/models/Brand";
import {
  ProductPageContext,
  initFiltersData,
} from "@/state/products/ProductsPageContext";

type ServerProps = {
  products: ProductType[];
  productPaginate?: MetaPaginate;
  categories: Category[];
  brands: Brand[];
};

export default function Index({
  products,
  productPaginate,
  categories,
  brands,
}: ServerProps) {
  const breadcrumbs: BreadcrumbsType[] = [
    { name: "Home", href: "/" },
    { name: "Products" },
  ];

  const router = useRouter();

  const getSelectedFromQueryParams = (queryString: string) => {
    return router.query[queryString]?.toString().split(",") ?? [];
  };

  const filtersData = {
    ...initFiltersData.filtersData,
    categories: {
      ...initFiltersData.filtersData.categories,
      items: categories,
      selected: getSelectedFromQueryParams("categories"),
    },
    brands: {
      ...initFiltersData.filtersData.brands,
      items: brands,
      selected: getSelectedFromQueryParams("brands"),
    },
    features: {
      ...initFiltersData.filtersData.features,
      selected: getSelectedFromQueryParams("features"),
    },
  };

  return (
    <ContainerWrapper className="py-5 space-y-5">
      <Breadcrumbs items={breadcrumbs} />
      <ProductPageContext.Provider value={{ filtersData: filtersData }}>
        <div className="flex">
          <FilterSidebar />
          <FilterContent
            products={products}
            productsPaginate={productPaginate}
          />
        </div>
      </ProductPageContext.Provider>
      <div className="py-10 bg-gray-200">
        <Subscribe />
      </div>
    </ContainerWrapper>
  );
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  query,
}) => {
  const queryString = makeQueryParams(query);

  const baseUrl = process.env.BASE_API_URL || "http://localhost:3000/api";

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
        productPaginate: products.meta?.paginate ?? undefined,
        categories: categories.data,
        brands: brands.data,
      },
    };
  
};
initFiltersData