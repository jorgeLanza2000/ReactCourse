import { useState } from 'react';

//! como archivo normal de css
import './ItemCounter.css';
//! como modulo de css
import styles from './ItemCounterModule.module.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  //! los Hooks es lo primero de cada componente
  const [count, setCount] = useState(quantity); //* valor iniical

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <section className='item-row'>
      <span
        style={{
          color: count === 1 ? 'red' : 'black',
        }}
        className='text-width'
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span
        style={{
          width: 15,
          textAlign: 'center',
        }}
        className={count === 1 ? styles.red : ''}
      >
        {count}
      </span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
