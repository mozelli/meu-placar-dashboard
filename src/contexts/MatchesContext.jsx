import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../api";

export const MatchesContext = createContext({});

function MatchesProvider({children}) {

  const [matchesSerieA, setMatchesSerieA] = useState([]);
  const [matchesSerieB, setMatchesSerieB] = useState([]);
  const [alertMessageMatches, setAlertMessageMatches] = useState({status: null, message: ""});
  const [loading, setLoading] = useState(false);

  async function loadMatches(serie) {
    setAlertMessageMatches({status: null, message: ""});
    setLoading(true);

    try {
      const response = await api.get(`/brasileiro-championship/matches/${serie}`);
      
      (serie === "A" ? setMatchesSerieA(response.data) : setMatchesSerieB(response.data))
      
      setLoading(false);
    } catch(error) {
      setAlertMessageMatches({status: "error", message: "Falha ao tentar carregar as partidas."});
      console.log(error.message);
      setLoading(false);
    }
  }

  async function scrapMatches(serie) {
    setAlertMessageMatches({status: null, message: ""});
    setLoading(true);

    try {
      await api.get(`/brasileiro-championship/scrap-matches/${serie}`);

      setAlertMessageMatches({status: "success", message: `Partidas série ${serie} atualizadas com sucesso!`});
      setLoading(false);
    } catch(error) {
      setAlertMessageMatches({status: "error", message: `Falha ao tentar atualizar as partidas da série ${serie}.`});
      console.log(error);
      setLoading(false);
    }
  }
  
  return (
    <MatchesContext.Provider value={{
      matchesSerieA,
      matchesSerieB,
      loadMatches,
      scrapMatches,
      loading,
      alertMessageMatches
    }}>
      {children}
    </MatchesContext.Provider>
  );
}

export default MatchesProvider;