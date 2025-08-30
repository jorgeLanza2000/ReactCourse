const ironman = {
  firstName: 'Jorge',
  lastName: 'Lanza',
  age: 25,
};

//!si se coloca como const solos e puede modificar mediante person.bla bla, si se coloca como let si se puede person = {}
//!si se selecciona una variable y se presiona F2 se puede renombrar y lo renombra en todo el archivo
const spiderman = ironman; //esto no se debe hacer ya que spiderman y ironman estaran apuntando al mismo espacio de memoria
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
console.log({ ironman, spiderman });

//ahora si son dos cosas distintas, pero solo el primer nivel, si una property tiene un objeto este tiene el mismo problema que arriba
const hulk = {
  firstName: 'Jorge',
  lastName: 'Lanza',
  age: 25,
  address: {
    zipCode: 'DIFK',
    city: 'Nueva York',
  },
};

const buenSpiderman = { ...hulk };
buenSpiderman.firstName = 'Peter';
buenSpiderman.address.city = 'Manhatan';
console.log({ hulk, buenSpiderman });

//la forma correcta es
const blackWidow = {
  firstName: 'Jorge',
  lastName: 'Lanza',
  age: 25,
  address: {
    zipCode: 'DIFK',
    city: 'Nueva York',
  },
};

const jacSparrow = structuredClone(blackWidow);
jacSparrow.firstName = 'Jack';
jacSparrow.address.city = 'Manhatan';
console.log({ blackWidow, jacSparrow });

//* INTERFACES

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  addres?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const granHeroe: Person = {
  firstName: 'Hola',
  lastName: 'Mundo',
  age: 45,
};

/*
  ? PROTIP
  si se define la interfaz, presionar ctrl + . y autorrellena las propiedades
*/

const pruebaCtrlPunto: Person = {
  firstName: '',
  lastName: '',
  age: 0,
};
console.log({ granHeroe, pruebaCtrlPunto });
