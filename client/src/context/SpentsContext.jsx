import { createContext, useContext, useState, useEffect } from "react";
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
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const [data, setData] = useState([]);
  const [filterMonth, setFilterMonth] = useState(currentMonth);

  const getContextSpents = async () => { //Pedido get de todos los gastos
    try {
      const res = await getSpentsRequest();
      setSpents(res.data);
    } catch (error) {
      console.error("Error on get spents", error);
    }
  };

  const createContextSpents = async (spent) =>{ //Pedido POST
    const res = await createSpentRequest(spent)
    console.log(res)
  }

  const deleteContextSpent = async (id) => {
    try {
      const res = await deleteSpentRequest(id);
      if (res.status === 204)
        setSpents(spents.filter((spent) => spent._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getContextSpents(); //Request de datos al backend
    } catch (error) {
      console.error("Error en la obtención de datos", error);
    }
  }, [spents]);

  useEffect(() => {
    if (filterMonth === 0) {
      // Si el mes seleccionado es 0 (es decir, "Todos"), mostramos todos los gastos
      setData(spents);
    } else {
      // Filtramos los gastos por el mes seleccionado
      setData(
        spents.filter((spent) => {
          const spentMonth = new Date(spent.date).getMonth() + 1;
          return spentMonth === filterMonth;
        })
      );
    }
  }, [filterMonth, spents]);


 
  return (
    <SpentsContext.Provider
     value={{
         spents, 
         getContextSpents,
         createContextSpents,
         deleteContextSpent,
         data,
         setFilterMonth,
         filterMonth
          }}>
      {children}
    </SpentsContext.Provider>
  );
}
