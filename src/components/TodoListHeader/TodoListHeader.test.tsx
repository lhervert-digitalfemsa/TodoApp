import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import TodoListHeader from './TodoListHeader';

describe('TodoListHeader component', () => {
  const mockAddTask = jest.fn();
  const renderComponent = () =>
    render(
      <TodoListHeader addTask={mockAddTask} />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();

    const todoListHeader = getByTestId('todoListHeader');

    expect(todoListHeader).toBeDefined();
  });

  it('should call addTask when button is clicked', () => {
    const { getByTestId } = renderComponent();

    const addButton = getByTestId('addButton');

    fireEvent.press(addButton);

    expect(mockAddTask).toHaveBeenCalled();
  });

  it('should update task state when input changes', () => {
    const { getByTestId } = renderComponent();

    const taskInput = getByTestId('taskInput');

    fireEvent.changeText(taskInput, 'New Task');

    expect(taskInput.props.value).toBe('New Task');
  });
});