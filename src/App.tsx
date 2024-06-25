import { useEffect } from 'react';
import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Product from './components/shop/Product';

import { useAppSelector, useAppDispatch } from './store/hooks';
// import { uiActions } from './store/ui-slice';
import Notification from './components/ui/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  const cart = useAppSelector((state) => state.cart);
  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
    //   try {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'pending',
    //         title: 'Sending',
    //         message: 'Sending cart data',
    //       })
    //     );
    //     const res = await fetch(
    //       'https://redux-store-f043e-default-rtdb.firebaseio.com/cart.json',
    //       {
    //         method: 'PUT',
    //         body: JSON.stringify(cart),
    //       }
    //     );
    //     if (!res.ok) {
    //       throw new Error('Sending cart data failed!');
    //     }
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'success',
    //         title: 'Success',
    //         message: 'Sent cart data successfully.',
    //       })
    //     );
    //   } catch (error) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: 'error',
    //         title: 'Error',
    //         message: 'Sending cart data failed!',
    //       })
    //     );
    //   }
    // };
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.items.length === 0) {
      return;
    }
    // sendCartData();

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Product />
      </Layout>
    </>
  );
}

export default App;
