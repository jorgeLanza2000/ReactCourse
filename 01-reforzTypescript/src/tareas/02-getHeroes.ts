import { heroesEnums, type Hero, type OwnerEnum } from '../data/heroes.data';

export const getHeroesByOwner = (owner: OwnerEnum): Hero[] => {
  const heroesByOwner = heroesEnums.filter((hero) => hero.owner == owner);
  return heroesByOwner;
};

//? Version simplificada
export const getHeroesByOwnerSimplify = (owner: OwnerEnum): Hero[] =>
  heroesEnums.filter((hero) => hero.owner == owner);
