import React from "react";
import { View, StyleSheet } from "react-native";
import ListOfBills from "../components/ListOfBills";
import FunctButton from "../components/styledComponents/FunctButton";
import {Link} from 'react-router-native'

function Home() {
  return (
    <View>
      <ListOfBills />
      <Link to="/createSpent">
        <FunctButton style={styles.container}> new spent </FunctButton>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    color: "black"
  }
})
export default Home;
