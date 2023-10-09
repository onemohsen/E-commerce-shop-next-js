import { createSlice } from "@reduxjs/toolkit";
import { CartStateType, CartItemType } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/models/Product";

const TAXPERCENT = 0.09;

const initialState: CartStateType = {
  items: [],
  checkout: {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ProductType>) {
      const cart: CartItemType = {
        id: action.payload?.id,
        title: action.payload?.title,
        image: action.payload?.image,
        summary: action.payload?.summary,
        price: action.payload?.price,
        quantity: 1,
      };

      const isAddedBefore = state.items.find((i) => i.id === action.payload.id);

      if (isAddedBefore) {
        isAddedBefore.quantity += 1;
      } else {
        state.items = [...state.items, cart];
      }

      cartSlice.caseReducers.calculateCheckout(state);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      cartSlice.caseReducers.calculateCheckout(state);
    },
    updateQuentity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }

      cartSlice.caseReducers.calculateCheckout(state);
    },
    calculateCheckout(state) {
      const checkout = { ...initialState.checkout };
      state.items.forEach((item) => {
        const subtotal = item.price * item.quantity;
        checkout.subtotal += subtotal;
      });
      checkout.tax = checkout.subtotal * TAXPERCENT;
      checkout.total = checkout.subtotal + checkout.tax - checkout.discount;

      state.checkout = checkout;
    },
    removeAllItems(state) {
      state.items = [];
      state.checkout = initialState.checkout;
    },
  },
});

export const { addItem, removeItem, updateQuentity, removeAllItems } =
  cartSlice.actions;

export default cartSlice.reducer;
