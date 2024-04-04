import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import Constants from "expo-constants";
import { renderItem } from "./renderItem";

function ListOfBills() {
  const { getContextSpents, spents } = useSpent();

  useEffect(() => {
    try {
      getContextSpents();
    } catch (error) {
      console.error("Error en la obtencion de datoss", error);
    }
  }, []);

  return (
    <View style={styles.main}>
      <StyledText color="Primary">Spents</StyledText>
      <FlatList
        data={spents}
        renderItem={renderItem}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 520,
  },
  main: {
    marginTop: Constants.statusBarHeight + 2,
  },
});

export default ListOfBills;
