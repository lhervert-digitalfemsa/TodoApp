import { renderHook, act } from '@testing-library/react-hooks';

import useTasks from './useTasks';
import { waitFor } from '@testing-library/react-native';

describe('useTasks', () => {
  it('should add a task', () => {
    const { result } = renderHook(() => useTasks());
    waitFor(() => {
      act(() => {
        result.current.setTask('Task 1');
      });
      act(() => {
        result.current.addTask();
      });
    });
    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].text).toBe('Task 1');
  });

  it('should toggle a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.setTask('Task 1');
      result.current.addTask();
    });
    act(() => {
      result.current.toggleComplete(result.current.tasks[0].id);
    });
    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('should delete a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.setTask('Task 1');
      result.current.addTask();
    });
    act(() => {
      result.current.deleteTask(result.current.tasks[0].id);
    });
    expect(result.current.tasks.length).toBe(0);
  });
});