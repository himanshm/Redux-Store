import { ReactNode } from 'react';
import classes from './Card.module.css';

type CardProps = {
  className: string;
  children: ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <section className={`${classes.card} ${className ? className : ''}`}>
      {children}
    </section>
  );
};

export default Card;
