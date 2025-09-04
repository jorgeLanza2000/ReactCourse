import type { FC } from 'react';
import type { Gif } from '../../../mock-data/gifs.mock';
import './GifList.css';

interface Props {
  list: Gif[];
}
//! otra forma de definir las props
export const GifList: FC<Props> = ({ list }) => {
  return (
    <div className='gifs-container'>
      {list.map((gif) => (
        <div key={gif.id} className='gif-card'>
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
