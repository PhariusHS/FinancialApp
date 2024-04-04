import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import Constants from "expo-constants";
import { renderItem } from "./renderItem";
import { Picker } from "@react-native-picker/picker";

function ListOfBills() {
  const { getContextSpents, spents } = useSpent();
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const [data, setData] = useState([]);
  const [filterMonth, setFilterMonth] = useState(currentMonth);

  useEffect(() => {
    try {
      getContextSpents();
    } catch (error) {
      console.error("Error en la obtención de datos", error);
    }
  }, []);

  useEffect(() => {
    if (filterMonth === 13) {
      // Si el mes seleccionado es 13 (es decir, "Todos"), mostramos todos los gastos
      setData(spents);
    } else {
      // Filtramos los gastos por el mes seleccionado
      setData(spents.filter(spent => {
        const spentMonth = new Date(spent.date).getMonth() + 1;
        return spentMonth === filterMonth;
      }));
    }
  }, [filterMonth, spents]);

  return (
    <View style={styles.main}>
      <StyledText color="Primary">Spents</StyledText>
      <Picker
        selectedValue={filterMonth}
        onValueChange={(itemValue, itemIndex) => setFilterMonth(itemValue)}
      >
        <Picker.Item label="Todos" value={13} />
        <Picker.Item label="Enero" value={1} />
        <Picker.Item label="Febrero" value={2} />
        <Picker.Item label="Marzo" value={3} />
        <Picker.Item label="Abril" value={4} />
        <Picker.Item label="Mayo" value={5} />
        <Picker.Item label="Junio" value={6} />
        <Picker.Item label="Julio" value={7} />
        <Picker.Item label="Agosto" value={8} />
        <Picker.Item label="Septiembre" value={9} />
        <Picker.Item label="Octubre" value={10} />
        <Picker.Item label="Noviembre" value={11} />
        <Picker.Item label="Diciembre" value={12} />
      </Picker>
      <FlatList data={data} renderItem={renderItem} style={styles.container} />
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
