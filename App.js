import { NativeRouter } from "react-router-native";
import Main from "./client/src/Main";
import { StatusBar } from "expo-status-bar";
import { SpentsProvider } from "./client/src/context/SpentsContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SpentsProvider>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </SpentsProvider>
    </>
  );
}
