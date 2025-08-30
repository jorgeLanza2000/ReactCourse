const useState = (value: string) => {
  const consolePrint = (valueSecondary: string): void => {
    console.log(valueSecondary);
  };
  return [value, consolePrint] as const;
};

const [name, printFn] = useState('Goku');
console.log(name);
printFn('Vegeta');
