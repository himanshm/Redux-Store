import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

// type CartButtonProps = {

// }

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  function toggleCartHandler() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
