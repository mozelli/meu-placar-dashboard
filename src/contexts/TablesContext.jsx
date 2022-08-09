import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../api";

export const TablesContext = createContext({});

function TablesProvider({children}) {

  const [tableSerieA, setTableSerieA] = useState([]);
  const [tableSerieB, setTableSerieB] = useState([]);
  const [alertMessage, setAlertMessage] = useState({status: null, message: ""});
  const [loading, setLoading] = useState(false);

  async function loadTable(serie) {
    setLoading(true);

    try {
      const response = await api.get(`/brasileiro-championship/table/${serie}`);
      
      (serie === "A" ? setTableSerieA(response.data) : setTableSerieB(response.data))
      
      setLoading(false);
    } catch(error) {
      setAlertMessage({status: "error", message: "Falha ao tentar carregar a tabela."});
      console.log(error.message);
      setLoading(false);
    }
  }
  
  return (
    <TablesContext.Provider value={{
      tableSerieA,
      tableSerieB,
      loadTable,
      loading,
      alertMessage
    }}>
      {children}
    </TablesContext.Provider>
  );
}

export default TablesProvider;