import classes from './CartButton.module.css';

// type CartButtonProps = {

// }

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
