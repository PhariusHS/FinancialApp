import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import AppBarTab from "./styledComponents/AppBarTab";



function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab to={"/"}>Home</AppBarTab>
      <AppBarTab to={"/signin"}>Log In</AppBarTab>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "relative",
        bottom: -830,
        justifyContent: "center",
        backgroundColor: theme.appBar.textPrimary,
        borderTopWidth: 2,
        borderTopColor: "#333",
        borderRadius:5,
        paddingBottom: 10,
        paddingHorizontal: 10
    }
})



export default AppBar;
