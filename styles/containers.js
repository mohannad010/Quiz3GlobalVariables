import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  mainBodyContainer: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  },
  currentValuesContainer: {
    flex: 0.5,
    marginLeft: 5,
  },
  identifierContainer: {
    flex: 1,
    flexDirection: "row",
  },
  charataristicTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.2,
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    flex: 0.2,
    flexDirection: "row",
  },
  MenuItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default containers;
