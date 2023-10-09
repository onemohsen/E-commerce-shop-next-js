import { Cart as CartIcon } from "@/components/icons";
import { useAppSelector } from "@/hooks/useStore";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  className?: string;
};

const Badge: FC<{ length: number; className?: string }> = ({
  length,
  className,
}) => {
  if (!length) return null;
  if (length > 99) return <span className={className}>99+</span>;
  if (length > 9) return <span className={className}>9+</span>;
  if (length < 1) return null;
  if (length < 10) return <span className={className}>{length}</span>;
  if (length < 100) return <span className={className}>{length}</span>;
  return null;
};

export default function Cart({ className }: Props) {
  const length = useAppSelector((state) => state.cart.items.length);

  return (
    <Link href="/cart" className={className}>
      <div className="relative">
        <CartIcon className="relative h-5 w-5 fill-gray-500" />
        <Badge
          length={length}
          className="absolute -top-2 left-5 rounded-full bg-red-500 px-1 text-xs text-white"
        />
      </div>
      <span className="text-xs text-gray-500">Cart</span>
    </Link>
  );
}
