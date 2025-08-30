function greet(name: string): string {
  return `Hola ${name}`;
}

//!funciones de flecha, no cambia a lo que apunta el objeto this, util para funciones anonimas
const greet2 = (name: string): string => {
  return `Hola ${name}`;
};
const message = greet('Goku');
const message2 = greet2('Vegeta');
console.log({ message, message2 });

function getUsuer() {
  return {
    uid: 'ABC-123',
    username: 'El_Papi',
  };
}

const getUser2 = () => {
  return {
    uid: 'ABC-123',
    username: 'El_Papi',
  };
};
const user = getUsuer();
const user2 = getUser2();
console.log({ user, user2 });

// * SIMPLIFICACION FUNCIONES FLECHA
//! si la funcion solo retorna algo
const greet3 = (name: string): string => `Hola simplificado ${name}`;
const message3 = greet3('Vegeta');
console.log({ message3 });

//! Si retornamos un objeto colocar ()
const getUser4 = () => ({
  uid: 'ABC-123',
  username: 'El_Papi',
});

const message4 = getUser4();
console.log({ message4 });
