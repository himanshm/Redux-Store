import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useAppDispatch } from '../../store/hooks';

// type CartButtonProps = {

// }

const CartButton = () => {
  const dispatch = useAppDispatch();
  function toggleCartHandler() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
