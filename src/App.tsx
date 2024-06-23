import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Product from './components/shop/Product';

import { useAppSelector } from './store/hooks';

function App() {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Product />
    </Layout>
  );
}

export default App;
