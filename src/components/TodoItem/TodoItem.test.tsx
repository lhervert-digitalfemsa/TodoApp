import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // Import the necessary package

import { TodoItem } from '../TodoItem';

const deleteMock = jest.fn();
const toggleComplete = jest.fn();

const task = {
  id: '1',
  text: 'TestTask',
  completed: false,
};

const renderComponent = () =>
  render(
    <TodoItem
      task={task}
      toggleComplete={toggleComplete}
      deleteTask={deleteMock}
    />
  );

describe('TodoItem component', () => {
  it('should render the component', () => {
    const { getByTestId } = renderComponent();

    const item = getByTestId('todoItem');

    expect(item).toBeDefined();
  });


  it('should have specific styles when task is uncompleted', () => {
    const { getByTestId } = renderComponent();

    const text = getByTestId(`taskText-${task.id}`);

    expect(text).not.toHaveStyle({ textDecorationLine: 'line-through' });
  });

  it('should delete task when button is clicked', () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId(`deleteButton-${task.id}`);

    fireEvent.press(button);

    expect(deleteMock).toHaveBeenCalled();
  });

  it('should toggle task when checkbox is clicked', () => {
    const { getByTestId } = renderComponent();

    const checkbox = getByTestId(`completeButton-${task.id}`);

    fireEvent.press(checkbox);

    expect(toggleComplete).toHaveBeenCalled();
  });

  it('should have specific styles when task is completed', () => {
    const { getByTestId } = render(
      <TodoItem
        task={{ ...task, completed: true }}
        toggleComplete={toggleComplete}
        deleteTask={deleteMock}
      />
    );

    const text = getByTestId(`taskText-${task.id}`);

    expect(text).toHaveStyle({ textDecorationLine: 'line-through' });
  });
});