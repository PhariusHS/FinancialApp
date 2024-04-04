import React from "react";
import { View } from "react-native";
import { Routes, Route } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import AppBar from "./components/AppBar";
import NewSpent from "./pages/NewSpent";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<LogIn />} />
        <Route path="createSpent" element={<NewSpent />} />
      </Routes>
      <AppBar />
    </View>
  );
};

export default Main;
