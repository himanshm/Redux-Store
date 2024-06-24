import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
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
    addToCart(state, action: PayloadAction<ActionPayload>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.price = existingItem.price + newItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      const existingItem = state.items[itemIndex];

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
