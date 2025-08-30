import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'CG6uENyzD4xZOAjFpFES1r2OkCC81uuO';

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const responseRandomGif = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  const { data }: GiphyRandomResponse = await responseRandomGif.json();

  return data.images.original.url;
};

//* version normal

// getRandomGifUrl().then((url) => {
//   createImageInsideDOM(url);
// });

//? Version simplificada
getRandomGifUrl().then(createImageInsideDOM);
