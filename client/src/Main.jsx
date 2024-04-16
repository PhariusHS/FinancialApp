import React from "react";
import { View } from "react-native";
import { Routes, Route } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import AppBar from "./components/AppBar";
import NewSpent from "./pages/NewSpent";
import Register from "./pages/Register";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="signin" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="spents" element={<Home/>}/>
        <Route path="createSpent" element={<NewSpent />} />
      </Routes>
      <AppBar />
    </View>
  );
};

export default Main;
