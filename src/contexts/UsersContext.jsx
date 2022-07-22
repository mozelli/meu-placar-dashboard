import { createContext, useState } from "react";

export const UsersContext = createContext({

});

function UsersProvider({children}) {
  const [users, setUsers] = useState("ok");

  const value = {
    users
  }

  return (
    <UsersProvider value={value}>
      {children}
    </UsersProvider>
  )
}

export default UsersProvider;

