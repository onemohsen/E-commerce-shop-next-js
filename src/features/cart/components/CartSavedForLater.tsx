import LightButton from "@/components/button/LightButton";
import Cart from "@/components/icons/Cart";
import ProductCartItem from "@/components/products/ProductCartItem";
import BoxWrapper from "@/components/wrapper/BoxWrapper";
import { ProductType } from "@/models/Product";
import React from "react";
import useActionCart from "../hooks/useActionCart";

type Props = {
  items: ProductType[];
};

export default function CartSavedForLater({ items }: Props) {
  const { add } = useActionCart();

  return (
    <BoxWrapper title="Saved for later">
      <div className="flex items-stretch">
        {items.map((p) => (
          <ProductCartItem
            key={p.id}
            item={p}
            imageSize={270}
            imageClassName="p-8"
            className="flex h-full w-1/4 flex-col space-y-2"
          >
            <span className="text-lg font-bold">${p.price}</span>
            <p
              className="h-12 max-h-12 w-60 overflow-hidden break-words"
              title={p.title}
            >
              {p.title}
            </p>
            <LightButton
              onClick={() => add(p)}
              customClass="w-36 flex space-x-2 text-primary"
            >
              <Cart className="h-5 w-5 fill-primary" />
              <span>Move to cart</span>
            </LightButton>
          </ProductCartItem>
        ))}
      </div>
    </BoxWrapper>
  );
}
