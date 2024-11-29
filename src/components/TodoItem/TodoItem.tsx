import React from "react";
import { View, Button, Text } from "react-native";
import type { Task } from "../../types";

import { styles } from "./TodoItem.styles";

type TodoItemProps = {
  task: Task;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoItem = ({ task, toggleComplete, deleteTask }: TodoItemProps) => {
  return (
    <View style={styles.container} testID="todoItem">
      <Text
        style={[
          styles.text,
          { textDecorationLine: task.completed ? "line-through" : "none" },
        ]}
        testID={`taskText-${task.id}`}
      >
        {task.text}
      </Text>
      <Button
        title="Complete"
        onPress={() => toggleComplete(task.id)}
        testID={`completeButton-${task.id}`}
      />
      <Button
        title="Delete"
        onPress={() => deleteTask(task.id)}
        testID={`deleteButton-${task.id}`}
      />
    </View>
  );
}

export default TodoItem;