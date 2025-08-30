import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const itemCounterName = 'Test item';
    render(<ItemCounter name={itemCounterName} />);

    expect(screen.getByText(itemCounterName)).toBeDefined();
    expect(screen.getByText(itemCounterName)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const itemCounterName = 'Test item';
    const itemCounterQuantity = 10;
    render(
      <ItemCounter name={itemCounterName} quantity={itemCounterQuantity} />
    );
    expect(screen.getByText(itemCounterQuantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    const quantity = 1;
    render(<ItemCounter name={'Test item'} quantity={quantity} />);
    const [buttonAdd] = screen.getAllByRole('button');
    fireEvent.click(buttonAdd);
    expect(screen.getByText(quantity + 1)).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    const quantity = 5;
    render(<ItemCounter name={'Test item'} quantity={quantity} />);
    const [, buttonSubstract] = screen.getAllByRole('button');
    fireEvent.click(buttonSubstract);
    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    const quantity = 1;
    render(<ItemCounter name={'Test item'} quantity={quantity} />);
    const [, buttonSubstrac] = screen.getAllByRole('button');
    fireEvent.click(buttonSubstrac);
    expect(screen.getByText('1')).toBeDefined();
  });

  test('should change to red when count is 1', () => {
    const quantity = 1;
    const name = 'Test item';
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');
  });

  test('should change to black when count is greater than 1', () => {
    const quantity = 2;
    const name = 'Test item';
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('black');
  });
});
