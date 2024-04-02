import React from "react";
import { TextInput } from "react-native";
import { useController } from "react-hook-form";

function Input({ name, control, type }) {
  const { field } = useController({
    name, // Pass the name prop to useController
    control,
    defaultValue: ""
  });

  return (
    <TextInput 
      inputMode={type}
      value={field.value} 
      onChangeText={field.onChange} 
    />
  );
}

export default Input;
