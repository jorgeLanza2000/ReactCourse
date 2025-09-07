import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gifs.interface';
import { getGifsByQuery } from '../components/actions/get-gifs-by-query-actions';
//! 3. se pasa si no se quiere que se resetee
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  //! 1. hooks de react mantienen el estado entre renderizaciones
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  //! 2. una variable normal no mantiene el estado, entonces cada vez que el estado cambia
  //! se vuelve a setear la variable desde 0 otra vez
  // const gifsCache: Record<string, Gif[]> = {};

  //! 4. tambien se puede utilizar el hook de react useRef para evitar el re-render
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    //! 3. forma de utilizarlo si se deja fuera del hook
    // if (gifsCache[term]) {
    //   setGifs(gifsCache[term]);
    //   return;
    // }

    //! 4. forma de utilizarlo con useRef
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    if (previousTerms.includes(query)) return;
    let searchesArray = structuredClone(previousTerms);
    if (previousTerms.length == 8) {
      searchesArray.pop();
    }
    searchesArray.unshift(query);
    setpreviousTerms(searchesArray);

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };
  return {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch,
  };
};
