import { useState, createContext } from "react";

export const UserContext = createContext({});

function UsersProvider({children}) {

  const [logged, setLogged] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  // const [authorizationLevel, setAuthorizationLevel] = useState(0);
  
  return (
    <UserContext.Provider value={{
      id, 
      setId, 
      logged, 
      setLogged, 
      name, 
      setName, 
      lastName, 
      setLastName, 
      email,
      setEmail,
      token,
      setToken
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UsersProvider;