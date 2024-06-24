import classes from './CartItem.module.css';
import { useAppDispatch } from '../../store/hooks';
import { addToCart, removeFromCart } from '../../store/cart-slice';

type CartItemProps = {
  id: string;
  title: string;
  quantity: number;
  totalPrice: number;
  price: number;
};

const CartItem = ({
  id,
  title,
  quantity,
  totalPrice,
  price,
}: CartItemProps) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart({ id, title, price }));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
