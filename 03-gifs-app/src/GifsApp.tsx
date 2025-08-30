import { mockGifs } from './mock-data/gifs.mock';
import { previousSearchesData } from './mock-data/previousSearches.mock';
import BuscadorBtn from './shared/components/buscador-with-btn/BuscadorBtn';
import { CustomHeader } from './shared/components/custom-header/CustomHeader';
import PreviousSearches from './gifs/components/previous-seearches/PreviousSearches';

export const GifsApp = () => {
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
        hasButton={true}
        btnText='Buscar'
      />
      {/* Previous search */}
      <PreviousSearches
        title='Busquedas previas'
        searches={previousSearchesData}
      />
      {/* Gifs */}
      <div className='gifs-container'>
        {mockGifs.map((gif) => (
          <div key={gif.id} className='gif-card'>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
