import { View, StyleSheet, Text } from "react-native";
import { formatDate } from "../functions/formatDate";
import StyledText from "./styledComponents/StyledText";




export const renderSpent = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.ChildContainer}>
        <View style={styles.ObjectContainer}>
          <StyledText>{item.name}</StyledText>
          <StyledText>{formatDate(item.date)}</StyledText>
        </View>
        <View style={styles.ObjectContainer}>
          <StyledText>${item.price}</StyledText>
        </View>
      </View>
    </View>
  );


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
    loading: { 
      flex: 1,
       justifyContent: "center", 
       alignItems: "center" 
      },
  });
  