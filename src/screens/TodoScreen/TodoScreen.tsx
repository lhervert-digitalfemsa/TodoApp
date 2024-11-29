// TodoScreen.tsx
import React from "react";
import {
  View,
} from "react-native";
import { TodoList } from "../../components/TodoList";
import useTasks from "../../hooks/useTasks";
import TodoHeader from "../../components/TodoListHeader/TodoListHeader";
import { styles } from "./TodoScreen.styles";

const TodoScreen: React.FC = () => {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <TodoHeader addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </View>
  );
};

export default TodoScreen;
