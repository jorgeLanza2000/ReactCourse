import { heroApi } from '../api/hero.api';
import type { Hero } from '../interfaces/hero.interface';

export interface OptionSearchParams {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (
  options: OptionSearchParams
): Promise<Hero[]> => {
  if (Object.keys(options).length === 0) return [];
  const { data } = await heroApi.get<Hero[]>('/search', {
    params: options,
  });
  const heroes = data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
  return heroes;
};
