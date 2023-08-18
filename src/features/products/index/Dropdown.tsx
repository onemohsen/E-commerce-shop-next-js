import { ProductFilterType } from "@/models/Types";
import React from "react";
import DropdownList from "./DropdownList";
import DropdownCheckbox from "./DropdownCheckbox";
import { useRouter } from "next/router";
import makeQueryParams from "@/utils/makeQueryParams";

type Props = {
  header: string;
  item: ProductFilterType;
};

export default function Dropdown({ header, item }: Props) {
  const router = useRouter();
  const { isCheckBox } = item;

  const filterQuery = async (values: number[]) => {
    const params = isCheckBox ? router.query : {};
    const queryString = makeQueryParams({ ...params, page: 1 }, header, values);

    router.push(`${location.pathname}${queryString}`);
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
