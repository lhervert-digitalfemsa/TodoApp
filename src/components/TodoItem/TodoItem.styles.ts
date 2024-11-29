import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  throughText: {
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    width: 70,
  }

});