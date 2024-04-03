import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import { renderItem } from "./renderItem";

function ListOfBills() {
  const { getContextSpents, spents } = useSpent();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getContextSpents();
      setData(spents);
      setLoading(false);
    } catch (error) {
      console.error("Error en la obtencion de datoss", error);
    }
  }, []);


  return (
    <View>
      <StyledText>Spents</StyledText>
      <FlatList data={data} renderItem={renderItem} style={styles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
  },
});


export default ListOfBills;
