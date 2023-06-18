import Breadcrumbs from "@/components/commons/Breadcrumbs";
import Subscribe from "@/components/commons/Subscribe";
import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import Dropdown from "@/components/pages/categories/index/Dropdown";
import { ProductCard } from "@/components/pages/index/product-category/ProductCard";
import { makeQueryParams } from "@/services/helpers";
import { Product } from "@/models/Product";
import { BreadcrumbsType, DrowpdownItemType } from "@/models/Types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type ServerProps = {
  products: Product[];
};

type FilterType = {
  header: string;
  show: boolean;
  items: DrowpdownItemType[];
  maxShowList?: number;
  isCheckBox?: boolean;
};

const filters: FilterType[] = [
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

export default function Index({ products }: ServerProps) {
  const breadcrumbs: BreadcrumbsType[] = [
    { name: "Home", href: "/" },
    { name: "Products" },
  ];

  const router = useRouter();

  const makeFilterQuery = (filter: FilterType, values: number[]) => {
    const params = filter?.isCheckBox ? router.query : {};
    const queryString = makeQueryParams(params, filter.header, values);
    router.push(`${location.pathname}${queryString}`);
  };

  return (
    <ContainerWrapper className="py-5 space-y-5">
      <Breadcrumbs items={breadcrumbs} />
      <div className="flex">
        <div className="w-1/5 space-y-1">
          {filters.map((filter, index) => (
            <div key={`${filter.header}-${index}`}>
              <p className="w-full border" />
              <Dropdown
                item={filter}
                maxShowList={filter.maxShowList}
                show={filter.show}
                isCheckbox={
                  Object.keys(filter).includes("isCheckBox")
                    ? filter.isCheckBox
                    : false
                }
                filterQuery={(values) => makeFilterQuery(filter, values)}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="w-4/5 bg-blue-400">
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
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

    const { data } = await res.json();

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    throw error;
    /*  return {
      notFound: true,
    }; */
  }
};
