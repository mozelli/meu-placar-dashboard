import { useState, createContext } from "react";
import axios from 'axios';

export const UserContext = createContext({});

function UsersProvider({children}) {

  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  function signOut() {
    localStorage.removeItem("token");
    setUser("");
    setToken("");
  }
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      signOut
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UsersProvider;