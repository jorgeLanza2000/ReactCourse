const person = {
  name: 'Jorge',
  age: 45,
  key: 'Ironman',
};
const { key, name: ironmanName, age: ironmanAge } = person; //! el orden no importa, si se llama igual quiere decir key: key... primero la llave, luego el nobmre de la variable
console.log({ key, ironmanName, ironmanAge });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name, //? si la propiedad es igual a la variable solo es necesario uno
      age: age,
    },
    rank: rank,
  };
};

const context = useContext(person);
console.log({ context });

const {
  keyName,
  rank,
  user: { name, age },
} = context;

console.log({ keyName, rank, name, age });
