import { createContext, useContext, useState } from "react";
import {
  getSpentsRequest,
  getSpentRequest,
  updateSpentRequest,
  deleteSpentRequest,
  createSpentRequest,
} from "../api/spents";

const SpentsContext = createContext();

export const useSpent = () => {
  const context = useContext(SpentsContext);

  if (!context) {
    throw new Error("useSpent must be used inside a provider");
  }

  return context;
};

export function SpentsProvider({ children }) {
  const [spents, setSpents] = useState([]);

  const getContextSpents = async () => {
    try {
      const res = await getSpentsRequest();
      setSpents(res.data);
    } catch (error) {
      console.error("Error on get spents", error);
    }
  };

  const createContextSpents = async (spent) =>{
    const res = await createSpentRequest(spent)
    console.log(res)
  }
  return (
    <SpentsContext.Provider
     value={{
         spents, 
         getContextSpents,
         createContextSpents
          }}>
      {children}
    </SpentsContext.Provider>
  );
}
