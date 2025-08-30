const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = myArray; //!pasa lo mismo de la referencia con el objeto

myArray2.push(7);
console.log({ myArray, myArray2 });

//!buena solución, pero si hay objetos pasa lo mismo que ya se vió
const myArray3 = [...myArray];

myArray3.push(8);
console.log({ myArray, myArray3 });

//forma correcta
const myArray4 = structuredClone(myArray);
myArray4.push(9);
console.log({ myArray, myArray4 });
