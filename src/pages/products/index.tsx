import Breadcrumbs from "@/components/Breadcrumbs";
import Subscribe from "@/components/Subscribe";
import ContainerWrapper from "@/components/wrapper/ContainerWrapper";
import makeQueryParams from "@/utils/makeQueryParams";
import { ProductType } from "@/models/Product";
import { BreadcrumbsType, MetaPaginate } from "@/models/Types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import {
  FilterSidebar,
  FilterContent,
  ProductPageContext,
  initFiltersData,
} from "@/features/products";
import { Category } from "@/models/Category";
import { Brand } from "@/models/Brand";

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
    <ContainerWrapper className="space-y-5 py-5">
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
      <div className="bg-gray-200 py-10">
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
initFiltersData;
