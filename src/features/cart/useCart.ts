import { ProductType } from "@/models/Product";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";

const useCart = (items: ProductType[] = []) => {
  const mapItems = items.map((i) => {
    return {
      id: i.id,
      title: i.title,
      image: i.image,
      summary: i.summary,
      price: i.price,
      quantity: 1,
    };
  });

  const [cart, setCart] = useState(mapItems);
  const { showToast } = useToast();

  const TAXPERCENT = 0.09;

  const checkout = () => {
    let checkout = { subtotal: 0, tax: 0, discount: 0, total: 0 };
    cart.forEach((item) => {
      const subtotal = item.price * item.quantity;
      checkout.subtotal += subtotal;
    });
    checkout.tax = checkout.subtotal * TAXPERCENT;
    checkout.total = checkout.subtotal + checkout.tax - checkout.discount;

    return checkout;
  };

  const remove = (id: number) => {
    const title = getCartTitle(id);

    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id).map((i) => ({ ...i })),
    );
    showToast("success", `${title} removed from cart`);
  };

  const update = (id: number, quantity: string) => {
    const title = getCartTitle(id);
    setCart((prevCart) => {
      return prevCart.map((i) => {
        if (i.id === id) {
          i.quantity = Number(quantity);
        }

        return i;
      });
    });
    showToast("success", `${title} quantity updated to ${quantity}`);
  };

  const getCartTitle = (id: number): string => {
    const item = cart.find((i) => i.id === id);
    return item?.title ?? "";
  };

  return { cart, update, remove, checkout };
};

export default useCart;
