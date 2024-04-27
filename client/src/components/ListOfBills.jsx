import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useSpent } from "../context/SpentsContext";
import Constants from "expo-constants";
import RenderSpent from './RenderSpent'
import { items } from "../../Months";
import { AntDesign } from "@expo/vector-icons";

function ListOfBills() {
  const { data, setFilterMonth, filterMonth, deleteContextSpent } = useSpent();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <StyledText
            color="primary"
            fontSize="subheading"
            style={{ marginHorizontal: 20 }}
          >
            Spents
          </StyledText>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            alignItems: "center",
          }}
        >
          <AntDesign name="caretdown" size={14} color="black" />
          <StyledText color="primary" fontSize="upbody">
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
                  onPress={() => {
                    setFilterMonth(item.key), setModalVisible(false);
                  }}
                  style={styles.months}
                >
                  <StyledText>{item.value}</StyledText>
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
        renderItem={({ item }) => <RenderSpent item={item} delId={item._id} />} // Use RenderSpent component here
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
    marginTop: 30,
    maxHeight: 350,
  },
  textContainer: {
    flexDirection: "row",
    marginBottom: 20,

    width: "100%",
    justifyContent: "center",
  },
  containerList: {
    maxHeight: Platform.OS === "android" ? 500 : 350,
    overflow: "scroll",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    display: "flex",
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
  months: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    paddingHorizontal: 40,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  scrollView: {},
});

export default ListOfBills;
