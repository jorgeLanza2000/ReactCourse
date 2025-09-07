import BuscadorBtn from './shared/components/buscador-with-btn/BuscadorBtn';
import { CustomHeader } from './shared/components/custom-header/CustomHeader';
import PreviousSearches from './gifs/components/previous-seearches/PreviousSearches';
import { GifList } from './gifs/components/gif-list/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { previousTerms, gifs, handleTermClicked, handleSearch } = useGifs();

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
