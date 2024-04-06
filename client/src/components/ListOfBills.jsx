import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView
} from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    try {
      getContextSpents(); //Request de datos al backend
    } catch (error) {
      console.error("Error en la obtención de datos", error);
    }
  }, []);

  useEffect(() => {
    if (filterMonth === 0) {
      // Si el mes seleccionado es 0 (es decir, "Todos"), mostramos todos los gastos
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
        <StyledText color="primary">Spents</StyledText>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <StyledText color="primary"> 
          {items[filterMonth].value}
          </StyledText>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => {setFilterMonth(item.key), setModalVisible(false)}}
                  style={styles.months}
                >
                  <StyledText >{item.value}</StyledText>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <StyledText color="Primary">Close</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    display:"flex",
    justifyContent: "flex-start",
    margin: 20,
    maxWidth: 300,
    width: 250,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
  },
  months:{
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    paddingHorizontal:40,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  scrollView: {
  },
});

export default ListOfBills;
