import ContainerWrapper from "@/components/commons/wrapper/ContainerWrapper";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product, ProductType } from "@/models/Product";
import CartBox from "@/components/pages/cart/CartBox";
import CartFeatures from "@/components/pages/cart/CartFeatures";
import CartSavedForLater from "@/components/pages/cart/CartSavedForLater";

export default function cart({
  cartItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ContainerWrapper className="space-y-5 py-5">
      <h4 className="text-2xl font-bold">{`Cart (${cartItems.length})`}</h4>
      <CartBox items={cartItems} />
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
