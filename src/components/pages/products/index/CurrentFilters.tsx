import Tag from "@/components/commons/Tag";
import { ProductFilterType } from "@/models/Types";
import { ProductPageContext } from "@/state/products/ProductsPageContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

type Props = {};
type TagType = {
  dropdown: string;
  name: string;
  value: number;
};

const getAvailableFilterTags = (filtersData: {
  [key: string]: ProductFilterType;
}) => {
  let tags: TagType[] = [];
  Object.keys(filtersData).forEach((key) => {
    const dropdown = filtersData[key];
    if (!dropdown["selected"].length) return;

    const itemSelected = dropdown.items.filter((item) =>
      dropdown["selected"].includes(item.id.toString())
    );

    itemSelected.forEach((item) =>
      tags.push({ dropdown: key, name: item.name, value: item.id })
    );
  });

  return tags;
};

export default function CurrentFilters({}: Props) {
  const { filtersData } = useContext(ProductPageContext);

  const router = useRouter();

  const tags = getAvailableFilterTags(filtersData);

  const removeTag = (tag: TagType) => {
    const dropdown = tag.dropdown;

    const newItems = router.query[dropdown]
      ?.toString()
      .split(",")
      .filter((val) => val != tag.value.toString());

    router.push({ query: { ...router.query, [dropdown]: newItems } });
  };

  return (
    <div className="my-5 space-x-2">
      {tags.map((tag) => (
        <Tag
          key={`${tag.dropdown}-${tag.value}`}
          title={tag.name}
          closeHandler={() => removeTag(tag)}
        />
      ))}
    </div>
  );
}
