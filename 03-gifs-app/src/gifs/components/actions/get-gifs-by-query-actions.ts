import type { GiphyResponse } from '../../interfaces/gihpy.response';
import type { Gif } from '../../interfaces/gifs.interface';
import { giphyAPI } from '../../api/giphy.api';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyAPI<GiphyResponse>('/search', {
    params: {
      q: query,
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.width),
  }));
};
