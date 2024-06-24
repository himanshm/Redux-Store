import ProductItem from './ProductItem';
import classes from './Product.module.css';

interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
}

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote!',
  },
  {
    id: 'p2',
    price: 12,
    title: 'My Second Book',
    description: 'This is my second book!',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
