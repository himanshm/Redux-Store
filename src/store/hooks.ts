import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from '.';

type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// TypedUseSelectorHook is a generic type and the related type it needs is a type that describes the data in our store.

// useAppDispatch: This custom hook is typed as DispatchFunction, ensuring it returns AppDispatch. It is essentially a typed version of the useDispatch hook, providing type safety when dispatching actions.

// useAppSelector: This custom hook is typed as TypedUseSelectorHook<RootState>, ensuring it correctly types the state structure according to RootState. It is a strongly-typed version of the useSelector hook, providing type safety when selecting state slices.
