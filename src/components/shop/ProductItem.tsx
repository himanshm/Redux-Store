import Card from '../ui/Card';
import classes from './ProductItem.module.css';

import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cart-slice';

type ProductItemProps = {
  id: string;
  title: string;
  price: number;
  description: string;
};

const ProductItem = ({ id, title, price, description }: ProductItemProps) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(addToCart({ id, title, price }));
  };
  return (
    <li className={classes.item}>
      <Card className=''>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
