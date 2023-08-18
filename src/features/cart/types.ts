export type CartItemType = {
  id: number;
  title: string;
  image: string;
  summary: string | undefined;
  price: number;
  quantity: number;
};

export type CartStateType = {
  items: CartItemType[];
  checkout: {
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
  };
};
