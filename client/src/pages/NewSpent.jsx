import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Input from "../components/styledComponents/Input";
import { useForm } from "react-hook-form";
import { useSpent } from "../context/SpentsContext";
import StyledText from "../components/styledComponents/StyledText";

function NewSpent() {
  const { control, handleSubmit, reset } = useForm();
  const { createContextSpents } = useSpent();

  const onSubmit = handleSubmit((data) => {
    try {
      createContextSpents(data);
      reset();
    } catch (error) {
      console.error("Error creating spent", error);
    }
  });

  return (
    <View style={styles.main}>
      <View>
        <Link to="/spents">
          <Text>Get Back</Text>
        </Link>
      </View>

      <View>
        <StyledText align="center" color="primary">
          Name
        </StyledText>
        <Input control={control} name="name" placeholder="Get some bitches" />
        <StyledText align="center" color="primary">
          Price
        </StyledText>
        <Input control={control} type="numeric" name="price" />
        <StyledText align="center" color="primary">
          Type
        </StyledText>
        <Input control={control} name="type" />
        <StyledText align="center" color="primary">
          Descrpition
        </StyledText>
        <Input control={control} name="description" />
        <Button title="submit" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight + 2,
  },
});

export default NewSpent;
