/**
 * Integration Testing.
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // Import the necessary package

import TodoScreen from './TodoScreen';

describe('TodoScreen component', () => {
  const renderScreen = () =>
    render(
      <TodoScreen />
    );

  it('should add a new task', () => {
    const { getByTestId, queryByText } = renderScreen();

    const input = getByTestId('taskInput');
    const addButton = getByTestId('addButton');


    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = queryByText('New Task');
    expect(task).toBeDefined();
  });
  it('should tootle task to complete', () => {
    const { getByTestId } = renderScreen();

    const input = getByTestId('taskInput');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = getByTestId('completeButton-1');

    fireEvent.press(task);

    expect(task).toBeDefined();
  });

  it('should delete a task', () => {
    const { getByTestId, queryByTestId } = renderScreen();

    const input = getByTestId('taskInput');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = getByTestId('deleteButton-1');

    fireEvent.press(task);

    expect(queryByTestId('taskText-1')).toBeNull();
  });
});
