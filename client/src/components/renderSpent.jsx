import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import StyledText from './styledComponents/StyledText';
import { formatDate } from '../functions/formatDate';
import { useSpent } from '../context/SpentsContext';
import FunctButton from './styledComponents/FunctButton';

const RenderSpent = (props) => {
  const { deleteContextSpent } = useSpent();

  return (
    <View style={styles.container}>
      <View style={styles.ChildContainer}>
        <View style={styles.ObjectContainer}>
          <StyledText>{props.item.name}</StyledText>
          <StyledText>{formatDate(props.item.date)}</StyledText>
        </View>
        <View  style={styles.ChildContainer}>
          <TouchableWithoutFeedback onPress={() => deleteContextSpent(props.delId)}><StyledText>DEL</StyledText></TouchableWithoutFeedback>
        </View>
        <View style={styles.ObjectContainer}>
          <StyledText>${props.item.price}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default RenderSpent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  ChildContainer: {
    borderColor: 'black',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    zIndex: 20,
  },
  ObjectContainer: {
    justifyContent: 'center',
  },
});
