// @flow
import * as React from "react";

import Image92 from "@/assets/images/home/prdocut-category/image 92.png";
import Image98 from "@/assets/images/home/prdocut-category/image 98.png";
import { ProductCategoryBox } from "./ProductCategoryBox";
import { ProductCategoryType } from "./ProductCategoryType";

type Props = {
  className?: string;
};

export const ProductCategories = ({ className }: Props) => {
  const categoriesWithProducts: ProductCategoryType[] = [
    {
      category: {
        id: 1,
        name: "Home and outdoor",
        image: Image92.src,
      },
      products: [
        {
          id: 1,
          title: "test aaaaaaaaaaaaaaaaaaaa sd sad sad sadddddddddddddddd",
          image: "https://picsum.photos/id/1/100",
          price: 19,
        },
        {
          id: 2,
          title: "test",
          image: "https://picsum.photos/id/2/100",
          price: 19,
        },
        {
          id: 3,
          title: "test",
          image: "https://picsum.photos/id/3/100",
          price: 19,
        },
        {
          id: 4,
          title: "test",
          image: "https://picsum.photos/id/4/100",
          price: 19,
        },
        {
          id: 5,
          title: "test",
          image: "https://picsum.photos/id/5/100",
          price: 19,
        },
        {
          id: 6,
          title: "test",
          image: "https://picsum.photos/id/6/100",
          price: 19,
        },
        {
          id: 7,
          title: "test",
          image: "https://picsum.photos/id/7/100",
          price: 19,
        },
        {
          id: 8,
          title: "test",
          image: "https://picsum.photos/id/8/100",
          price: 19,
        },
      ],
    },

    {
      category: {
        id: 2,
        name: "Consumer electronics and gadgets",
        image: Image98.src,
      },
      products: [
        {
          id: 9,
          title: "test",
          image: "https://picsum.photos/id/9/100",
          price: 19,
        },
        {
          id: 10,
          title: "test",
          image: "https://picsum.photos/id/10/100",
          price: 19,
        },
        {
          id: 11,
          title: "test",
          image: "https://picsum.photos/id/11/100",
          price: 19,
        },
        {
          id: 12,
          title: "test",
          image: "https://picsum.photos/id/12/100",
          price: 19,
        },
        {
          id: 13,
          title: "test",
          image: "https://picsum.photos/id/13/100",
          price: 19,
        },
        {
          id: 14,
          title: "test",
          image: "https://picsum.photos/id/14/100",
          price: 19,
        },
        {
          id: 15,
          title: "test",
          image: "https://picsum.photos/id/15/100",
          price: 19,
        },
        {
          id: 16,
          title: "test",
          image: "https://picsum.photos/id/16/100",
          price: 19,
        },
      ],
    },
  ];

  return (
    <>
      {categoriesWithProducts.map((item, index) => {
        return (
          <ProductCategoryBox
            key={`${index}-${item.category.name}`}
            item={item}
            className={className}
          />
        );
      })}
    </>
  );
};
