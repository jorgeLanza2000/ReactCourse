import { describe, expect, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />); //! solo se actualiza cuando se ejecuta el render
    // screen.debug(); //! se actualiza si algo se actualiza en el componente, por ejemplo un botón

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toContain('Jorge');

    const h3 = container.querySelector('h3');
    expect(h3?.innerHTML).toBe('Lanza');
  });

  test('should render firstName and lastName whit screen', () => {
    render(<MyAwesomeApp />);

    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toBe('Jorge');
  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot(); //! es muy rigido ya que evalua la estructura html
  });

  test('should match snapshot con screen', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});
