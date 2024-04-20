import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest } from "../api/auth";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])

  const signUp = async (user) => { // Funcion de contexto para POST register
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Error registrando al usuario", error);
      setErrors(error.response.data)
    }
  };

  const signIn = async (user) => {  //Funcion de contexto para POST login
    try{
      const res = await loginRequest(user);
      console.log(res)
    } catch (error) {
      setErrors(error.response.data.issues)
    }
  }

  useEffect(() => {
    if(errors > 0) {
      setTimeout(() => {
        setErrors([]) //Esperamos 5 segundos para hacer clear de los errors
      }, 5000)
    }
  }, [errors])

  return (
    <AuthContext.Provider
      value={{
        signUp,
        setErrors,
        user,
        errors,
        signIn,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
