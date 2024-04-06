import React from "react";
import { View, StyleSheet } from "react-native";
import ListOfBills from "../components/ListOfBills";
import FunctButton from "../components/styledComponents/FunctButton";
import { Link } from "react-router-native";
import StyledText from "../components/styledComponents/StyledText";

function Home() {
  return (
    <View>
      <View>
        <ListOfBills />
      </View>
      <View style={Styles.buttons}>
        <Link to="/createSpent">
          <FunctButton> New spent</FunctButton>
        </Link>
      </View>
      <View style={Styles.total}>
        <StyledText>Total: </StyledText>
        <StyledText></StyledText>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    margin:10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
