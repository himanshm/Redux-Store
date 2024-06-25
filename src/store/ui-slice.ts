import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type Status = 'pending' | 'error' | 'success';

type NotificationState = {
  status: Status;
  title: string;
  message: string;
};

type UiState = {
  cartIsVisible: boolean;
  notification: NotificationState | null;
};

const initialState: UiState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<NotificationState>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
