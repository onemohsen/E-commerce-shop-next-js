import ContainerWrapper from "@/components/wrapper/ContainerWrapper";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product, ProductType } from "@/models/Product";
import {
  CartBox,
  CartFeatures,
  CartSavedForLater,
  CartHeader,
} from "@/features/cart";

export default function cart({
  cartItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ContainerWrapper className="space-y-5 py-5">
      <CartHeader />
      <CartBox />
      <CartFeatures />
      <CartSavedForLater items={cartItems} />
    </ContainerWrapper>
  );
}

type ServerProps = {
  cartItems: ProductType[];
};
export const getServerSideProps: GetServerSideProps<ServerProps> = async () => {
  const randomIds = new Set<number>();
  while (randomIds.size < 4) {
    randomIds.add(Math.floor(Math.random() * (54 - 1 + 1)) + 1);
  }
  const cartItems = await new Product()
    .whereIn("id", [...randomIds])
    .paginate(false)
    .$get();

  return {
    props: {
      cartItems: cartItems.data,
    },
  };
};
