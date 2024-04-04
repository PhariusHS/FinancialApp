import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import AppBarTab from "./styledComponents/AppBarTab";

function AppBar() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <AppBarTab to={"/"}>Home</AppBarTab>
        <AppBarTab to={"/signin"}>Log In</AppBarTab>
        <AppBarTab to={"/newSpents"}>Nuevo</AppBarTab>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.appBar.textPrimary,
    borderTopWidth: 2,
    borderTopColor: "#333",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default AppBar;
