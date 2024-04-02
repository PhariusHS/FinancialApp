import React from "react";
import { Button, Text, View } from "react-native";
import { Link } from "react-router-native";
import Input from "../components/styledComponents/Input";
import { useForm } from "react-hook-form";
import { useSpent } from "../context/SpentsContext";

function NewSpent() {
  const { control, handleSubmit, reset } = useForm();
  const { createContextSpents } = useSpent();


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    try {
      createContextSpents(data);
      reset();
    } catch (error) {
      console.error("Error creating spent", error);
    }
  });

  return (
    <>
      <View>
        <Link to="/">
          <Text>Get Back</Text>
        </Link>
      </View>

      <View>
        <Input control={control} name="name" />
        <Input control={control} type="numeric" name="price" />
        <Input control={control} name="type" />
        <Input control={control} name="description" />
        <Button title="submit" onPress={onSubmit} />
      </View>
    </>
  );
}

export default NewSpent;
