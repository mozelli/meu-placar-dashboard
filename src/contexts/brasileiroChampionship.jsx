import { useState, createContext } from "react";

export const brasileiroChampionshipContext = createContext({});

function BrasileiroChampionshipProvider({children}) {

  const [tableSerieA, setTableSerieA] = useState([]);
  const [tableSerieB, setTableSerieB] = useState([]);

  console.log("[Context: BasileiroChampionshipProvider]");
  
  return (
    <brasileiroChampionshipContext.Provider value={
      {
        tableSerieA, 
        setTableSerieA,
        tableSerieB,
        setTableSerieB
      }
    }>
      {children}
    </brasileiroChampionshipContext.Provider>
  );
}

export default BrasileiroChampionshipProvider;