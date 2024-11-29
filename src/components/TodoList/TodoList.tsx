import React from "react";
import { FlatList, View, } from "react-native";
import type { Task } from "../../types";
import { TodoItem } from "../TodoItem";

import { styles } from "./TodoList.styles";

type TodoListProps = {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoList = ({ tasks, toggleComplete, deleteTask }: TodoListProps) => {
  return (
    <View style={styles.container} testID="todoList">
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            task={item}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};

export default TodoList;