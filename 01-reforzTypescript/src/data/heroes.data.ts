export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}
interface HeroEnums {
  id: number;
  name: string;
  owner: OwnerEnum;
}

export type Owner = 'DC' | 'Marvel'; //! para valores especificos, no se pasa a JS

//! aqui si se crea algo en JS en la transpilacion
export enum OwnerEnum {
  DC = 'DC',
  Marvel = 'Marvel',
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Green Lanter',
    owner: 'DC',
  },
];

export const heroesEnums: HeroEnums[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 6,
    name: 'Green Lanter',
    owner: OwnerEnum.DC,
  },
];

export default heroesEnums; //! esto sirve para exportarlo si se exporta el archivo entero sin necesidad de nombrarlo específicamente
