import { heroes, type Hero } from '../data/heroes.data'; //! se recomienda a interfaces y enums colocarsles type ya que es más eficiente cuando solo se usa para especificar tipo de datos

const getHeroById = (id: number): Hero => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });
  if (!hero) {
    throw new Error(`No existe un heroe con el id ${id}`);
  }
  return hero;
};

console.log(getHeroById(7));
