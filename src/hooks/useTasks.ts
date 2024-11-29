import { useState } from "react";
import { Task } from "../types";


const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: `${tasks.length + 1}`, text: task, completed: false },
    ]);
    setTask("");
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, task, setTask, addTask, toggleComplete, deleteTask };
}

export default useTasks;