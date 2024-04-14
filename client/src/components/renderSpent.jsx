import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './styledComponents/StyledText';
import { formatDate } from '../functions/formatDate';
import { useSpent } from '../context/SpentsContext';
import FunctButton from './styledComponents/FunctButton';

const RenderSpent = ({ item }) => {
  const { deleteContextSpent } = useSpent();

  return (
    <View style={styles.container}>
      <View style={styles.ChildContainer}>
        <View style={styles.ObjectContainer}>
          <StyledText>{item.name}</StyledText>
          <StyledText>{formatDate(item.date)}</StyledText>
        </View>
        <View>
          <FunctButton onPress={item => deleteContextSpent(item._id)}>DEL</FunctButton>
        </View>
        <View style={styles.ObjectContainer}>
          <StyledText>${item.price}</StyledText>
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
  },
  ObjectContainer: {
    justifyContent: 'center',
  },
});
