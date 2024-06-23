import Card from '../ui/Card';
import classes from './ProductItem.module.css';

type ProductItemProps = {
  title: string;
  price: number;
  description: string;
};

const ProductItem = ({ title, price, description }: ProductItemProps) => {
  return (
    <li className={classes.item}>
      <Card className=''>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
