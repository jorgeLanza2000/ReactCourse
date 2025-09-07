import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  //! los metodos en custom hooks son privados, entonces solo pueden ser accedidos dentro del hook
  const [counter, setcounter] = useState(initialValue);

  const handleAdd = () => {
    setcounter(counter + 1);
  };

  const handleSubstract = () => {
    setcounter(counter - 1);
  };

  const handleReset = () => {
    setcounter(initialValue);
  };
  return {
    //Values
    counter,
    //Actions
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
