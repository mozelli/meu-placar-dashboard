import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../api";

export const UsersContext = createContext({});

function UsersProvider({children}) {

  const [user, setUser] = useState();
  const [alertMessage, setAlertMessage] = useState({status: null, message: ""});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = localStorage.getItem("user");
      const storageToken = localStorage.getItem("token");
  
      if(storageUser && storageToken) {
        setUser(storageUser);
      }
    }
    
    loadStorageData();
  }, []);

  async function signIn(email, password) {
    setLoading(true);

    try {
      const response = await api.post("/users/sign-in", {email, password});
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setLoading(false);
    } catch(error) {
      setAlertMessage({status: "error", message: "Usuário ou senha incorretos."});
      console.log(error.message);
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />
  }
  
  return (
    <UsersContext.Provider value={{
      user,
      signIn,
      signOut,
      signed: !!user,
      alertMessage,
      loading
    }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;