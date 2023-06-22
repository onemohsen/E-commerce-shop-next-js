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
import React from "react";
import FilterSidebar from "@/components/pages/products/index/FilterSidebar";
import FilterContent from "@/components/pages/products/index/FilterContent";

type ServerProps = {
  products: Product[];
  paginate?: MetaPaginate;
};

const filters: ProductFilterType[] = [
  {
    header: "categories",
    maxShowList: 4,
    show: true,
    items: [
      { name: "Mobile accessory", value: 1 },
      { name: "Electronics", value: 2 },
      { name: "Smartphones", value: 3 },
      { name: "Modern tech", value: 4 },
      { name: "test1", value: 5 },
      { name: "test2", value: 6 },
      { name: "test3", value: 7 },
    ],
  },
  {
    header: "brands",
    maxShowList: 5,
    show: true,
    isCheckBox: true,
    items: [
      { name: "Samsung", value: 1 },
      { name: "Apple", value: 2 },
      { name: "Huawei", value: 3 },
      { name: "Pocco", value: 4 },
      { name: "Lenovo", value: 5 },
      { name: "test2", value: 6 },
      { name: "test3", value: 7 },
    ],
  },
  {
    header: "features",
    maxShowList: 5,
    show: true,
    isCheckBox: true,
    items: [
      { name: "Metallic", value: 1 },
      { name: "Plastic cover", value: 2 },
      { name: "8GB Ram", value: 3 },
      { name: "Super power", value: 4 },
      { name: "Large Memory", value: 5 },
      { name: "test2", value: 6 },
      { name: "test3", value: 7 },
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

export default function Index({ products, paginate }: ServerProps) {
  const breadcrumbs: BreadcrumbsType[] = [
    { name: "Home", href: "/" },
    { name: "Products" },
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
    </ContainerWrapper>
  );
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  query,
}) => {
  const queryString = makeQueryParams(query);

  const url = `http://localhost:3000/api/products${queryString}`;

  try {
    const res = await fetch(url);

    const { data, meta } = await res.json();

    return {
      props: {
        products: data,
        paginate: meta.paginate ?? undefined,
      },
    };
  } catch (error) {
    throw error;
    /*  return {
      notFound: true,
    }; */
  }
};
