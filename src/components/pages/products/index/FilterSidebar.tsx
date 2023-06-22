import React from "react";
import Dropdown from "./Dropdown";
import { ProductFilterType } from "@/models/Types";

type Props = {
  items: ProductFilterType[];
  makeFilterQuery: (filter: ProductFilterType, values: number[]) => void;
};

export default function FilterSidebar({ items, makeFilterQuery }: Props) {
  return (
    <div className="space-y-1">
      {items.map((filter, index) => (
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
  );
}
