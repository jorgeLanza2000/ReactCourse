import { heroApi } from '../api/hero.api';
import type { HeroesResponse } from '../interfaces/get-heroes.response';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number | string,
  limit: number | string = 6,
  category: string = 'all'
): Promise<HeroesResponse> => {
  let pageNumber: number = +page;
  if (isNaN(pageNumber)) pageNumber = 1;

  let limitNumber: number = +limit;
  if (isNaN(limitNumber)) limitNumber = 6;

  const { data } = await heroApi.get<HeroesResponse>('/', {
    params: {
      limit: limitNumber,
      offset: (pageNumber - 1) * limitNumber,
      category: category,
    },
  });

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
