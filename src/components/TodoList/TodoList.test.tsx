import React from 'react';
import { render } from '@testing-library/react-native';

import TodoList from './TodoList';

const deleteMock = jest.fn();
const toggleComplete = jest.fn();

const tasks = [
  {
    id: '1',
    completed: false,
    text: 'TestTask',
  },
  {
    id: '2',
    completed: false,
    text: 'Task 2',
  },
];

const renderComponent = () =>
  render(
    <TodoList
      tasks={tasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteMock}
    />
  );

describe('<TodoList />', () => {
  it('should render the component', () => {
    const { getByTestId } = renderComponent();

    const todoList = getByTestId('todoList');

    expect(todoList).toBeDefined();
  });

  it('should render the complete list items', () => {
    const { getAllByTestId } = renderComponent();

    const todoList = getAllByTestId('todoItem');

    expect(todoList).toHaveLength(tasks.length);
  });
});