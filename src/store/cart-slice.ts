import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  changed: boolean;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

type ActionPayload = {
  id: string;
  title: string;
  price: number;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action: PayloadAction<ActionPayload>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      const existingItem = state.items[itemIndex];

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const { replaceCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
