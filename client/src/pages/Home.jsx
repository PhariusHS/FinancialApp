import React, {useEffect} from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import ListOfBills from "../components/ListOfBills";
import { Link } from "react-router-native";
import StyledText from "../components/styledComponents/StyledText";
import TotalSpents from "../components/TotalSpents";
import { AntDesign } from "@expo/vector-icons";
import { useSpent } from "../context/SpentsContext";

function Home() {
  const {getContextSpents} = useSpent();

  useEffect(() => {
    try {
      getContextSpents(); //Request de datos al backend
    } catch (error) {
      console.error("Error en la obtención de datos", error);
    }
  }, []);

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
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginLeft:10,
    width: "95%",
  },
  total: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
