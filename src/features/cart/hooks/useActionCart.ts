import { ProductType } from "@/models/Product";
import { useCallback } from "react";
import { useAppDispatch } from "@/useStore";
import { useToast } from "@/hooks/useToast";
import {
  addItem,
  removeAllItems,
  removeItem,
  updateQuentity as updateQuantitySlicer,
} from "../cartSlice";

const useActionCart = () => {
  const { showToast } = useToast();
  const dispatch = useAppDispatch();

  const updateQuentity = useCallback(
    (id: number, quantity: string) => {
      dispatch(updateQuantitySlicer({ id: id, quantity: Number(quantity) }));
      showToast("success", ` quantity updated to ${quantity}`);
    },
    [dispatch, showToast],
  );

  const remove = (id: number) => {
    dispatch(removeItem(id));
    showToast("success", `removed from cart`);
  };

  const add = useCallback(
    (item: ProductType) => {
      dispatch(addItem(item));
      showToast("success", `${item?.title} added to cart`);
    },
    [dispatch, showToast],
  );

  const removeAll = () => {
    dispatch(removeAllItems());
    showToast("success", `All items removed from cart`);
  };

  return { updateQuentity, remove, add, removeAll };
};

export default useActionCart;
