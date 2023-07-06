import { MetaPaginate, ProductFilterType } from "@/models/Types";
import React, { useContext } from "react";
import DropdownList from "./DropdownList";
import DropdownCheckbox from "./DropdownCheckbox";
import { makeQueryParams } from "@/services/helpers";
import { useRouter } from "next/router";
import { ProductPageContext } from "@/state/products/ProductsPageContext";
import { Product, ProductType } from "@/models/Product";

type Props = {
  header: string;
  item: ProductFilterType;
};

export default function Dropdown({ header, item }: Props) {
  const router = useRouter();
  const { isCheckBox } = item;

  const { setProducts, setProductPaginate } = useContext(ProductPageContext);

  const filterQuery = async (values: number[]) => {
    const params = isCheckBox ? router.query : {};
    const queryString = makeQueryParams({ ...params, page: 1 }, header, values);

    const response = await new Product().setQuery(queryString).get();
    const data = await response.json();
    if (data?.data) {
      setProducts(() => data.data as ProductType[]);
    }
    if (data?.meta?.paginate) {
      setProductPaginate(() => data.meta.paginate as MetaPaginate);
    }

    router.push(`${location.pathname}${queryString}`, undefined, {
      shallow: true,
    });
  };

  const getProperites = () => {
    return {
      header,
      item,
      onClickHandler: (values: number[]) => filterQuery(values),
    };
  };

  return (
    <>
      {isCheckBox && <DropdownCheckbox {...getProperites()} />}
      {!isCheckBox && <DropdownList {...getProperites()} />}
    </>
  );
}
