import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import Constants from "expo-constants";
import { renderItem } from "./renderItem";
import { SelectList } from "react-native-dropdown-select-list";
import { items } from "../../Months";

function ListOfBills() {
  const { getContextSpents, spents } = useSpent();
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const [data, setData] = useState([]);
  const [filterMonth, setFilterMonth] = useState(currentMonth);

  useEffect(() => {
    try {
      getContextSpents(); //Request de datos al backend
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
      setData(
        spents.filter((spent) => {
          const spentMonth = new Date(spent.date).getMonth() + 1;
          return spentMonth === filterMonth;
        })
      );
    }
  }, [filterMonth, spents]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <StyledText color="Primary">Spents</StyledText>
        <SelectList
          placeholder={items[filterMonth - 1].value }
          setSelected={(itemValue) => setFilterMonth(itemValue)}
          search = {false}
          data={items} // Array de objetos con los meses y sus values
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.containerList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight + 2,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  containerList: {
    maxHeight: 520,
  },


});
export default ListOfBills;
