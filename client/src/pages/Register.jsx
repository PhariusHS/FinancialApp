import { Button, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Input from "../components/styledComponents/Input";
import StyledText from "../components/styledComponents/StyledText";
import { registerRequest } from "../api/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-native";
function Register() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerRequest(data);
      navigate("/", {replace:true})
    } catch (error) {
      console.error("Error registrando al usuario", error);
    }
  });
  return (
    <View style={styles.main}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Username
        </StyledText>
        <Input control={control} name="username"></Input>
        <StyledText align="center" fontWeight="bold">
          Email
        </StyledText>
        <Input control={control} name="email" type="email"></Input>
        <StyledText align="center" fontWeight="bold">
          Password
        </StyledText>

        <Input control={control} name="password" secureTextEntry={true}></Input>
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
});

export default Register;
