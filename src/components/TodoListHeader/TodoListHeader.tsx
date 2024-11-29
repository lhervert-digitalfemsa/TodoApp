import React from "react";
import { Button, View, TextInput } from "react-native";

import { styles } from "./TodoListHeader.styles";

type TodoListHeaderProps = {
  addTask: (text: string) => void;
};

const TodoListHeader = ({ addTask }: TodoListHeaderProps) => {
  const [task, setTask] = React.useState("");

  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };

  return (
    <View style={styles.container} testID="todoListHeader">
      <TextInput
        placeholder="New Task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
        testID="taskInput"
      />
      <Button title="Add Task" onPress={handleAddTask} testID="addButton" />
    </View>
  );
};

export default TodoListHeader;