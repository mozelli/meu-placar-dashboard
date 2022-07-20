import { useContext, useState } from "react";
import {Navigate} from 'react-router-dom';

import axios from 'axios';
import { UserContext } from "../../contexts/users";

const Login = () => {

  const [emailForm, setEmailForm] = useState("");
  const [password, setPassword] = useState("");
  const {logged, setLogged, setId, setName, setLastName, setEmail, token, setToken} = useContext(UserContext);

  function formHandle(e) {
    e.preventDefault();
    axios("http://localhost:4444/users/authenticate", {
      method: "post",
      data: {
        email: emailForm, password
      }
    })
    .then((response) => {
      setLogged(true);
      setId(response.data.user._id);
      setName(response.data.user.name);
      setLastName(response.data.user.lastname);
      setEmail(response.data.user.email);
      setToken(response.data.token);
    })
    .catch((error) => {
      console.error(error);
      setLogged(false);
    })
  }

  return (
      <section className="container mt-5">
        {logged && <Navigate to="/dashboard" />}
        <div className="row justify-content-md-center">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title text-center">
                  <h5>Login</h5>
                </div>
                <form onSubmit={formHandle}>
                  <div className="mb-3">
                    <div className="form-label">E-mail</div>
                    <input type="text" value={emailForm} className="form-control" onChange={(event) => setEmailForm(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <div className="form-label">Senha</div>
                    <input type="password" value={password} className="form-control"  onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <div className="mb-3">
                    <a href="#" className="text-decoration-none text-danger">Esqueci minha senha</a>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success">Entrar!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-3">
          <div className="col-md-7 text-center">
            <small className="text-secondary">Desenvolvido por João Mozelli Neto</small>
          </div>
        </div>
      </section>
    );
}

export default Login;