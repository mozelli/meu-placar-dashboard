import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
  
  const token = localStorage.getItem("token");

  if(token !== null) {
    const auth_string = `Bearer ${token}`;

    axios("http://localhost:4000/users/authenticate", {
      headers: {
            Authorization: auth_string
      }
    })
    .then((response) => {
      if(response.data.authorized) {
        return {children}
      } else {
        return <Navigate to="/" />
      }
    })
    .catch((error) => {
      console.log(error.message);
    });

  } else {
    return <Navigate to="/" />
  }
}

export default Protected;