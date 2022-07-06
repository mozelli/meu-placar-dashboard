import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const brasileiroChampionshipContext = createContext({});

function BrasileiroChampionshipProvider({children}) {

  const [tableSerieA, setTableSerieA] = useState([]);
  const [tableSerieB, setTableSerieB] = useState([]);

  function getTableSerieA() {
    axios({
      method: "get",
      url: "http://localhost:4444/campeonato-brasileiro/table/A",
    })
    .then((response) => {
      setTableSerieA(response.data.table);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function updateTableSerieA() {
    axios.put("http://localhost:4444/campeonato-brasileiro/scrap-table/A")
    .then((responseRefresh) => {
      if(!responseRefresh.data.error) {
        getTableSerieA();
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function getTableSerieB() {
    axios({
      method: "get",
      url: "http://localhost:4444/campeonato-brasileiro/table/B",
    })
    .then((response) => {
      setTableSerieB(response.data.table);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function updateTableSerieA() {
    axios.put("http://localhost:4444/campeonato-brasileiro/scrap-table/B")
    .then((responseRefresh) => {
      if(!responseRefresh.data.error) {
        getTableSerieB();
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getTableSerieA();
    getTableSerieB();
  }, [])

  return (
    <brasileiroChampionshipContext.Provider value={{tableSerieA, tableSerieB, updateTableSerieA}}>
      {children}
    </brasileiroChampionshipContext.Provider>
  );
}

export default BrasileiroChampionshipProvider;