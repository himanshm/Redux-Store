import Card from '../ui/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useAppSelector } from '../../store/hooks';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
