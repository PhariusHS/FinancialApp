import React, { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside a provider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      // Guardar el token en AsyncStorage
      await AsyncStorage.setItem("token", res.data.token);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error registrando al usuario", error);
      setErrors(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      // Guardar el token en AsyncStorage
      await AsyncStorage.setItem("token", res.data.token);
      console.log(res.data)
      setIsAuthenticated(true);
      setUser(res.data);
      console.log(user)
    } catch (error) {
      console.error("Error iniciando sesión", error);
      setErrors([error.response.data]);
    }
  };


  useEffect(() => {
    const checkLogin = async () => {
      try {
        // Obtener el token de AsyncStorage
        const token = await AsyncStorage.getItem("token");
        if (token) {
          // Verificar el token
          const res = await verifyTokenRequest(token);

          if (res && res.data) {
            setIsAuthenticated(true);
            setUser(res.data);
          } else {
            // Limpiar el token si no es válido
            await AsyncStorage.removeItem("token");
          }
        }
      } catch (error) {
        console.error("Error verificando la sesión del usuario", error.message);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        setErrors,
        user,
        errors,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
