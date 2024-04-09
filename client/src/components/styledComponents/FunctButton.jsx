import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



function FunctButton({children}) {
  return (
    <View style={Styles.container}>
        <Text>{children}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flexBasis:"auto",
    borderWidth: 1,
    padding:10,
    marginHorizontal: 10, 
    marginVertical:5,
    borderRadius: 10,
    maxWidth:100
  }
})

export default FunctButton