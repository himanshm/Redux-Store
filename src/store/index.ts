import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // This line declares a type alias RootState which represents the shape of the entire Redux state tree managed by the store. ReturnType<typeof store.getState>: This utility type extracts the return type of the getState method of the store, which returns the current state. RootState will thus represent the type of the Redux state.

export type AppDispatch = typeof store.dispatch; // This line declares a type alias AppDispatch which represents the type of the dispatch function used to dispatch actions to the store. typeof store.dispatch: This utility type extracts the type of the dispatch method of the store.

export default store;
