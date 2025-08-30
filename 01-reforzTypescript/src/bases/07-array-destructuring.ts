const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = characterNames; //! aquí si importa el orden
console.log({ p1, p2, p3 });

const [, , trunksName] = characterNames; //! como importa el orden, se pueden dejar solo las comas para indicar la pocision
console.log({ trunksName });

const returnArrayFn = () => {
  return ['ABC', 123] as const; //! lo vuelve readonly y hace que siempre el primero es string y segundo un número
};

const [letters, nums] = returnArrayFn();
console.log({ letters, nums });
