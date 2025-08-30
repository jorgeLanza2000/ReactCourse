import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'CG6uENyzD4xZOAjFpFES1r2OkCC81uuO';

const getRandomGiph = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
};

getRandomGiph
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((error) => {
    console.error(error);
  });
