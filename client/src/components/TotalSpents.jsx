import { View, StyleSheet } from "react-native";
import { useSpent } from "../context/SpentsContext";
import StyledText from "./styledComponents/StyledText";
import { parserNum } from "../functions/parserNum";

function TotalSpents() {
  const { data } = useSpent();
  const totalPrice = data.reduce((accumulator, actualItem) => {
    return accumulator + actualItem.price;
  }, 0);

  return (
    <View>
      <StyledText color="primary" fontWeight="bold" fontSize="subheading">{parserNum(totalPrice)}</StyledText>
    </View>
  );
}

export default TotalSpents;
