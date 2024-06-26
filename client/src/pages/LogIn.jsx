import { Button, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Input from "../components/styledComponents/Input";
import StyledText from "../components/styledComponents/StyledText";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-native";

function LogIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errors: signInErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/spents");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  console.log(signInErrors)
  return (
    <View style={styles.main}>
      {signInErrors.map((error, i) => (
        <View style={styles.error} key={i}>
          <StyledText color="white">{error.issues[0].message}</StyledText>
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
      <View style={styles.redirect}>
        <StyledText>Dont have an account yet?</StyledText>

        <Link to={"/register"}>
          <StyledText color="primary">Sign up</StyledText>
        </Link>
      </View>
      <View style={styles.ButtonContainer}>
        <Button title="submit" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection:"column",
    marginTop: 200,
    justifyContent: "center",
    
  },
  error: {
    margin: 5,
    padding: 10,
    backgroundColor: "red",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  redirect: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  ButtonContainer:{
    marginTop: 20,
    paddingHorizontal:50,
    borderRadius:50,
    overflow: "hidden",
  }
});

export default LogIn;
