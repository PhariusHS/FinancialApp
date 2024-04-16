import { NativeRouter } from "react-router-native";
import Main from "./client/src/Main";
import { StatusBar } from "expo-status-bar";
import { SpentsProvider } from "./client/src/context/SpentsContext";
import { AuthProvider } from "./client/src/context/AuthContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthProvider>
        <SpentsProvider>
          <NativeRouter>
            <Main />
          </NativeRouter>
        </SpentsProvider>
      </AuthProvider>
    </>
  );
}
