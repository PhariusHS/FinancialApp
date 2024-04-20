import axios from "axios";
import { Platform } from "react-native";
import { baseUrlAndroid, baseUrlDefault } from "./URL";


const baseUrl = Platform.select({
  android: baseUrlAndroid,
  default: baseUrlDefault
});

const instance = axios.create({
  baseURL: `http://${baseUrl}:3000/api`,
  withCredentials: true
});

export default instance;
