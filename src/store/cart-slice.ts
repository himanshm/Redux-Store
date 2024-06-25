import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
import { AppDispatch } from '.';

type CartItem = {
  id: string;
  title: string;
  price: number;
  totalPrice: number;
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
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action: PayloadAction<ActionPayload>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
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

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// Action Creator Thunk
export const sendCartData = (cart: CartState) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        'https://redux-store-f043e-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const { replaceCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
