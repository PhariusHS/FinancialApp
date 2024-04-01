import React from "react";
import { TextInput } from "react-native";
import { useController } from "react-hook-form";

function Input({ name, control }) {
  const {field} = useController({
    control,
    defaultValue: "",
    
  });
  return <TextInput value={field.value} onChangeText={field.onChange}  />;
}

export default Input;
