import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../api";

export const TablesContext = createContext({});

function TablesProvider({children}) {

  const [tableSerieA, setTableSerieA] = useState([]);
  const [tableSerieB, setTableSerieB] = useState([]);
  const [alertMessageTables, setAlertMessageTables] = useState({status: null, message: ""});
  const [loading, setLoading] = useState(false);

  async function loadTable(serie) {
    setAlertMessageTables({status: null, message: ""});
    setLoading(true);

    try {
      const response = await api.get(`/brasileiro-championship/table/${serie}`);
      
      (serie === "A" ? setTableSerieA(response.data) : setTableSerieB(response.data))
      
      setLoading(false);
    } catch(error) {
      setAlertMessageTables({status: "error", message: "Falha ao tentar carregar a tabela."});
      console.log(error.message);
      setLoading(false);
    }
  }

  async function scrapTables(serie) {
    setAlertMessageTables({status: null, message: ""});
    setLoading(true);

    try {
      await api.get(`/brasileiro-championship/scrap-table/${serie}`);

      setAlertMessageTables({status: "success", message: `Tablela série ${serie} atualizada com sucesso!`});
      setLoading(false);
    } catch(error) {
      setAlertMessageTables({status: "error", message: `Falha ao tentar atualizar a tabela da série ${serie}.`});
      console.log(error);
      setLoading(false);
    }
  }
  
  return (
    <TablesContext.Provider value={{
      tableSerieA,
      tableSerieB,
      loadTable,
      scrapTables,
      loading,
      alertMessageTables
    }}>
      {children}
    </TablesContext.Provider>
  );
}

export default TablesProvider;