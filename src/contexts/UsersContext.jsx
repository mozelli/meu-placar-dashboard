import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { api } from "../api";

export const UsersContext = createContext({});

function UsersProvider({children}) {

  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [alertMessageUsers, setAlertMessageUsers] = useState({status: null, message: ""});
  const [loadingUsers, setLoadingUsers] = useState(false);

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
      setAlertMessageUsers({status: "error", message: "Usuário ou senha incorretos."});
      console.log(error.message);
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />
  }

  async function loadUsers() {
    setAlertMessageUsers({status: null, message: ""});
    setLoadingUsers(true);

    try {
      const response = await api.get("/users");
      setUsers(response.data);
      setAlertMessageUsers({status: "success", message: "Ok!"});
      setLoadingUsers(false);
    }catch(error) {
      setAlertMessageUsers({status: "error", message: "Falha ao tentar carregar os usuários."});
      console.log(error.message);
      setLoadingUsers(false);
    }
  } 

  async function addNewUser(data) {
    setAlertMessageUsers({status: null, message: ""});
    setLoadingUsers(true);

    try {
      await api.post("/users/add-new-user", {data});
      setAlertMessageUsers({status: "success", message: "Novo usuário cadastrado com sucess!"});
      setLoadingUsers(false);
    }catch(error) {
      setAlertMessageUsers({status: "error", message: "Falha ao tentar criar um novo usuário."});
      console.log(error);
      setLoadingUsers(false);
    }
  }
  
  return (
    <UsersContext.Provider value={{
      user,
      users,
      signIn,
      signOut,
      loadUsers,
      addNewUser,
      signed: !!user,
      alertMessageUsers,
      loadingUsers
    }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;