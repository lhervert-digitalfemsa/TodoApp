import React from "react";
import TodoScreen from "./src/screens/TodoScreen/TodoScreen";
import { SafeAreaView } from "react-native";

const App: React.FC = () => {

  return <SafeAreaView style={{ flex: 1 }}>
    <TodoScreen />
  </SafeAreaView>
};

export default App;
