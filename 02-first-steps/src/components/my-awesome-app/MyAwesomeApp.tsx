import type { CSSProperties } from 'react';

//? Las constantes es mejor que esten afuera de la función del componente
//? esto es porque cuando cambia de estado se ejecuta el componente entero entonces uno se puede ahorrar esa ejecución
const firstName = 'Jorge';
const lastName = 'Lanza';
const favoriteGames = ['CSGO', 'Valorant'];
const isActive = true; //! los valores bool no generan nada en html de react
//! los obj no se pueden imprimir solo así
const address = {
  zipCode: 'ABC-123',
  country: 'Canada',
};

//? tambies se pueden crear las css properties afuera
const myStyles: CSSProperties = {
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: '10px',
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <div data-testid='div-app'>
      <h3>{lastName}</h3>
      <h1 data-testid='first-name-title'>{firstName}</h1>
      <p style={myStyles} className='mi-clase-favorita'>
        {favoriteGames.join(', ')}
      </p>
      {/* <h1>{isActive}</h1> */}
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      {/* <p>{address}</p> */}
      <p
        style={{
          backgroundColor: 'red',
          borderRadius: 10,
          padding: '1rem',
          color: 'white',
        }}
      >
        {JSON.stringify(address)}
      </p>
    </div>
  );
}
