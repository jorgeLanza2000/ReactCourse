import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstEmbebedComponent } from './FirstEmbebedComponent';
import { ItemCounter } from '../shopping-cart/ItemCounter';

//! simulacion de funcion de retorno
const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid='ItemCounter' />;
});

vi.mock('../shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

//? otra forma de hacerlo
// vi.mock('../shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid='ItemCounter'
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe('FirstEmbebedComponent', () => {
  //! ciclos de vida a lo angular, esto es after cada test
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstEmbebedComponent />);
    expect(container).toMatchSnapshot(); //! es muy rigido ya que evalua la estructura html
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstEmbebedComponent />);
    const itemCounters = screen.getAllByTestId('ItemCounter');
    expect(itemCounters.length).toBe(6);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstEmbebedComponent />);
    expect(mockItemCounter).toHaveBeenCalledTimes(6);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch',
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Play Station 5',
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Xbox One X',
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pony station',
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro controller',
      quantity: 55,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Steam deck',
      quantity: 3,
    });
  });
});
