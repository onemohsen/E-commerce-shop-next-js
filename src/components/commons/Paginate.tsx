import { MetaPaginate } from "@/models/Types";
import React, { useEffect, useMemo, useState } from "react";
import { ChervonLeft, ChervonRight } from "./icons/Index";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  meta: MetaPaginate;
  [key: string]: any;
};

export default function Paginate({ meta, ...rest }: Props) {
  const { query, push } = useRouter();

  const [active, setActive] = useState(query.page ? +query.page : 1);

  useEffect(() => {
    setActive(query.page ? +query.page : 1);
  }, [query.page]);

  const getItemProps = (index: number) => ({
    className: `${
      active === index
        ? "bg-gray-100 text-blue-900 pointer-events-none"
        : "bg-white"
    } px-4 py-3 hover:bg-gray-100 border `,
    href: {
      query: { ...query, page: index },
    },
  });

  const makeNext = () => {
    return (
      <Link
        href={{
          query: {
            ...query,
            page: meta.from - 1 > 1 ? meta.from - 1 : 1,
          },
        }}
        className={`flex items-center px-2 py-3 bg-white hover:bg-gray-100 border rounded-r ${
          active === meta.last_page ? "pointer-events-none" : ""
        }`}
      >
        <ChervonRight className="w-5 h-w-5" />
      </Link>
    );
  };

  const makePrev = () => {
    return (
      <Link
        href={{
          query: {
            ...query,
            page: meta.from - 1 > 1 ? meta.from - 1 : 1,
          },
        }}
        className={`flex items-center px-2 py-3 bg-white hover:bg-gray-100 border rounded-l ${
          active === 1 ? "pointer-events-none" : ""
        }`}
      >
        <ChervonLeft className="w-5 h-w-5" />
      </Link>
    );
  };

  const makePage = () => {
    const pages = [];
    const start = meta.from - 1 == 0 ? 1 : meta.from - 1;
    let betweenpage = null;

    for (let i = 1; i <= meta.last_page; i++) {
      if (
        i != 1 &&
        i != 2 &&
        i != start &&
        i != start + 1 &&
        i != active + 1 &&
        i <= meta.last_page - 2
      ) {
        if (!betweenpage) {
          betweenpage = pages.push(
            <li key={i} {...getItemProps(i)}>
              ...
            </li>
          );
        }
        continue;
      }
      pages.push(
        <li key={i}>
          <Link {...getItemProps(i)}>{i}</Link>
        </li>
      );
    }

    return pages;
  };

  const makeSelectPerpage = () => {
    const options = ["6", "9", "18", "27"];

    const changeHandler = (e: any) => {
      push({
        query: { ...query, page: 1, perPage: e.target.value },
      });
    };

    return (
      <select
        className="flex items-center px-5 py-3 bg-white hover:bg-gray-100 border"
        onChange={changeHandler}
        value={query.perPage}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            show {option}
          </option>
        ))}
      </select>
    );
  };

  const makePagination = () => {
    if (meta.last_page === 1 || meta.total === 0) return <></>;
    return (
      <div {...rest}>
        {makeSelectPerpage()}
        <nav className="block">
          <ul className="flex rounded list-none flex-wrap  items-center">
            <li>{makePrev()}</li>
            {makePage()}
            <li>{makeNext()}</li>
          </ul>
        </nav>
      </div>
    );
  };

  return makePagination();
}
