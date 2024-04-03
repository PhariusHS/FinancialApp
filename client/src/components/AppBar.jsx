import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import AppBarTab from "./styledComponents/AppBarTab";



function AppBar() {
  return (
    <View style={styles.father}>
    <View style={styles.container}>
      <AppBarTab to={"/"}>Home</AppBarTab>
      <AppBarTab to={"/signin"}>Log In</AppBarTab>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
     
        width: "100%",
        justifyContent: "center",
        backgroundColor: theme.appBar.textPrimary,
        borderTopWidth: 2,
        borderTopColor: "#333",
        borderRadius:5,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    father: {
 

    }

})



export default AppBar;
