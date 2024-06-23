import CartButton from '../cart/CartButton';
import classes from './MainHeader.module.css';

// type MainHeaderProps = {

// }

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
