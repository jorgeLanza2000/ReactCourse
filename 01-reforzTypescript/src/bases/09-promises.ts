//* <> es conocido como un generico en promesas
const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject('Mi amigo se perdió');
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero de vuelta: ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log('Pues a seguir con mi vida');
  });
