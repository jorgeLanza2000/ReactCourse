import { ItemCounter } from '../shopping-cart/ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: 'Pony station',
    quantity: 1,
  },
  {
    productName: 'Pro controller',
    quantity: 55,
  },
  {
    productName: 'Steam deck',
    quantity: 3,
  },
];

//! en lugar de @For pues es .map
//? el key no debe ser el index, mala praxis
//? obviamente key debe ser unico
export const FirstEmbebedComponent = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <h1>Carrito de compras</h1>
      <ItemCounter name='Nintendo Switch' quantity={2} />
      <ItemCounter name='Play Station 5' quantity={1} />
      <ItemCounter name='Xbox One X' quantity={3} />
      <span>**************************************</span>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </section>
  );
};
