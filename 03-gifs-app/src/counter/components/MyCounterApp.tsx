import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
  //! los hooks siempre dependen de su posicion, es importante saber cual es pone primero
  const { counter, handleAdd, handleReset, handleSubstract } = useCounter();
  //! se colocan los useState antes y los efectos luego

  return (
    <div className='content-center'>
      <h1>counter: {counter}</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
