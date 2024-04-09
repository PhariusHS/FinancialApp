import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import ListOfBills from "../components/ListOfBills";
import { Link } from "react-router-native";
import StyledText from "../components/styledComponents/StyledText";
import TotalSpents from "../components/TotalSpents";
import { AntDesign } from "@expo/vector-icons";

function Home() {
  return (
    <View>
      <View>
        <ListOfBills />
      </View>

      <Link
        to="/createSpent"
        underlayColor="#fff"
        style={{ overflow: "hidden" }}
      >
        <View style={Styles.buttons}>
            <AntDesign name="pluscircleo" size={32} color="black" style ={{marginRight: 5}} />
            <StyledText fontSize="upBody" fontWeight="bold">Add</StyledText>
        </View>
      </Link>

      <View style={Styles.total}>
        <StyledText fontSize="upBody">Total: </StyledText>
        <StyledText>
          <TotalSpents />
        </StyledText>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "75%",
  },
  total: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
