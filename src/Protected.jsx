import { Navigate } from "react-router-dom";

const Protected = () => {
  if(localStorage.getItem("token") !== null) {
    const auth_string = `Bearer ${localStorage.getItem("token")}`;
  
    axios("http://localhost:4000/users/authenticate", {
      headers: {
            Authorization: auth_string
      }
    })
    .then((response) => {
      if(response.data.authorized) {
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