import { createContext, useState, useContext } from "react";
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

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Error registrando al usuario", error);
      setErrors(error.response.data)
    }
  };

  const singIn = async (user) => {
    try{
      const res = await loginRequest(user);
      console.log(res)
    } catch (error) {
      setErrors(error.response.data.issues)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        setErrors,
        user,
        errors,
        singIn,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
