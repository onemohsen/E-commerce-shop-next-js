import Tag from "@/components/commons/Tag";
import React from "react";

type Props = {};

export default function CurrentFilters({}: Props) {
  return (
    <div className="space-x-2 my-5">
      <Tag title="Mobile" />
      <Tag title="Samsung" />
    </div>
  );
}
