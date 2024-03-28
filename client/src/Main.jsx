import React from "react";
import { View } from "react-native";
import { Routes, Route } from "react-router-native";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import AppBar from "./components/AppBar";
import NewSpent from "./pages/NewSpent";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<LogIn />} />
        <Route path="createSpent" element={<NewSpent />} />
      </Routes>
    </View>
  );
};

export default Main;
