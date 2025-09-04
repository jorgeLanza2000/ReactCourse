import { useEffect, useState, type KeyboardEvent } from 'react';
import './BuscadorBtn.css';
interface Props {
  hasButton: boolean;
  placeholder?: string;
  btnText?: string;
  onQuery: (query: string) => void;
}

export default function BuscadorBtn({
  hasButton,
  placeholder = 'Buscar',
  btnText,
  onQuery,
}: Props) {
  const [query, setQuery] = useState('');

  //! El efecto se dispara cuando el componente entra en pantalla
  //? se debe colocar en el [] que hace que se ejecute el efecto
  //! efectos hacen tareas puntuales
  //? Forma de hacer debounce
  useEffect(() => {
    const timoutId = setTimeout(() => {
      handleSearch();
    }, 700);

    //! life cycle destroy
    //? se ejecuta cuando el componente no esta en el DOM
    //? o se vuelve a ejecutar el efecto
    return () => {
      clearTimeout(timoutId);
    };
    //! con estas variables se vuelve a ejecutar el efecto si cambian
  }, [query, onQuery]);

  const handleSearch = (delete_input: boolean = false) => {
    if (query.trim() == '') return;
    const cleanUpQuery = cleanQuery(query.trim());
    onQuery(cleanUpQuery);
    if (delete_input == true) {
      setQuery('');
    }
  };

  const cleanQuery = (query: string): string => {
    return query.toLowerCase();
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(true);
    }
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        onKeyDown={(event) => {
          handleEnter(event);
        }}
      />
      {hasButton && btnText && (
        <button type='button' onClick={() => handleSearch(true)}>
          {btnText}
        </button>
      )}
    </div>
  );
}
