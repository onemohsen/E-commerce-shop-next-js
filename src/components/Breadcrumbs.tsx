import { BreadcrumbsType } from "@/models/Types";
import Link from "next/link";
import React from "react";

type Props = {
  items: BreadcrumbsType[];
};

export default function Breadcrumbs({ items }: Props) {
  const buildLink = (item: BreadcrumbsType) => {
    if (item.href) {
      return (
        <Link href={item.href} className="space-x-1">
          <span>{item.name}</span>
          <span>{">"} </span>
        </Link>
      );
    }

    return (
      <p>
        <span className="font-bold">{item.name}</span>
      </p>
    );
  };

  return (
    <ul className="flex space-x-3 text-gray-500">
      {items.map((item) => (
        <li key={item.name}>{buildLink(item)}</li>
      ))}
    </ul>
  );
}
