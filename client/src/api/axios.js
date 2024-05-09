import axios from "axios";
import { Platform } from "react-native";
import { baseUrlAndroid, baseUrlDefault } from "./URL";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = Platform.select({
  android: baseUrlAndroid,
  default: baseUrlDefault
});

const instance = axios.create({
  baseURL: `http://${baseUrl}:3000/api`,
  withCredentials: true
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
