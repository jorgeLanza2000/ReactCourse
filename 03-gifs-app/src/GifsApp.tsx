import { mockGifs } from './mock-data/gifs.mock';
import BuscadorBtn from './shared/components/buscador-with-btn/BuscadorBtn';
import { CustomHeader } from './shared/components/custom-header/CustomHeader';
import PreviousSearches from './gifs/components/previous-seearches/PreviousSearches';
import { GifList } from './gifs/components/gif-list/GifList';
import { useState } from 'react';
import { getGifsByQuery } from './gifs/components/actions/get-gifs-by-query-actions';
import type { Gif } from './gifs/interfaces/gifs.interface';

export const GifsApp = () => {
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const handleTermClicked = (term: string) => {
    console.log(term);
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
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title='Buscador de Gifs'
        description='Descugre y comparte el Gif perfecto'
      />
      {/* Search */}
      <BuscadorBtn
        placeholder='Buscar gifs'
        hasButton={false}
        btnText='Buscar'
        onQuery={handleSearch}
      />
      {/* Previous search */}
      <PreviousSearches
        title='Busquedas previas'
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList list={gifs} />
    </>
  );
};
