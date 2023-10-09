import { useAppSelector } from "@/hooks/useStore";

const useStateCart = () => {
  const { items, checkout } = useAppSelector((state) => state.cart);

  return { items, checkout };
};

export default useStateCart;
