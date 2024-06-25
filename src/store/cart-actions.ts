import { AppDispatch } from '.';
import { CartState, replaceCart } from './cart-slice';
import { uiActions } from './ui-slice';

// Action Creator Thunk
export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://redux-store-f043e-default-rtdb.firebaseio.com/cart.json'
      );

      if (!res.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const resData = await res.json();

      return resData;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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
