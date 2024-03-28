import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import { formatDate } from "../functions/formatDate";


function ListOfBills() {
  const { getContextSpents, spents } = useSpent();

  useEffect(() => {
    getContextSpents();
  }, []);

  return (
    <View>
      <StyledText>Spents</StyledText>
      {spents.map((spent, index) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.ChildContainer}>
              <View style={styles.ObjectContainer}>
                <StyledText>{spent.name}</StyledText>
                <StyledText>{formatDate(spent.date)}</StyledText>
              </View>

              <View style={styles.ObjectContainer}>
                <StyledText>${spent.price}</StyledText>
              </View>
            </View>
          </View>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  ChildContainer: {
    borderColor: "black",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  ObjectContainer: {
    alignItems: "start",
    justifyContent: "center",
  },
});

export default ListOfBills;
