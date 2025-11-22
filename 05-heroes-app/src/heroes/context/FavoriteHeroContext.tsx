import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { Hero } from '../interfaces/hero.interface';
interface FavoriteHeroContext {
  //state
  favorites: Hero[];
  favoriteCount: number;

  //methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorite = localStorage.getItem('favorites');
  return favorite ? JSON.parse(favorite) : [];
};

export const FavoriteHeroContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id != hero.id);
      setFavorites(newFavorites);
      return;
    }

    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero): boolean => {
    return favorites.some((h) => h.id == hero.id);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
