import { useAppSelector } from "@/hooks/useStore";
import React from "react";

export default function CartHeader() {
  const length = useAppSelector((state) => state.cart.items.length);

  return <h4 className="text-2xl font-bold">{`Cart (${length})`}</h4>;
}
