import { useState, createContext } from "react";
import axios from 'axios';

export const UserContext = createContext({});

function UsersProvider({children}) {

  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  function signIn(email, password) {
    axios("http://localhost:4000/users/sign-in", {
      method: "post",
      data: {
        email, password
      }
    })
    .then((response) => {
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      return true;
    })
    .catch((error) => {
      console.error(error.message);
      return false;
    })
  }

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
    setToken("");
  }
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      signIn,
      signOut
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UsersProvider;