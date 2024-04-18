import { Button, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import Constants from "expo-constants";
import Input from "../components/styledComponents/Input";
import StyledText from "../components/styledComponents/StyledText";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function LogIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singIn , errors: singInErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    singIn(data);
  });
  return (
    <View style={styles.main}>
      {singInErrors.map((error, i) => (
        <View style={styles.error} key={i}>
          <StyledText color="white">{error.message}</StyledText>
        </View>
      ))}
      <View>
        <StyledText align="center" fontWeight="bold">
          Email
        </StyledText>
        <Input control={control} name="email" type="email"></Input>
        {errors.email && (
          <StyledText align="center" color="error">
            Email is required
          </StyledText>
        )}

        <StyledText align="center" fontWeight="bold">
          Password
        </StyledText>
        <Input control={control} name="password" secureTextEntry={true}></Input>
        {errors.password && (
          <StyledText align="center" color="error">
            Password is required
          </StyledText>
        )}
      </View>
      <View>
        <Button title="submit" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight + 2,
  },
  error: {
    margin: 5,
    padding: 10,
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LogIn;
