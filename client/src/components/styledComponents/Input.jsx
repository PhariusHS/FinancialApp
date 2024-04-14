import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useController } from "react-hook-form";

function Input({ name, control, type, placeholder, secureTextEntry}) {
  const { field } = useController({
    name, // Pass the name prop to useController
    control,
    defaultValue: ""
  });

  return (
    <TextInput 
    style={styles.input}
      inputMode={type}
      value={field.value} 
      placeholder={placeholder}
      onChangeText={field.onChange} 
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({

  input:{
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 10,


  }


})

export default Input;
