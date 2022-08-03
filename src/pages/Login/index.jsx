import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { UserContext } from "../../contexts/users";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [emailForm, setEmailForm] = useState("");
  const [password, setPassword] = useState("");
  const { setUser,token, setToken } = useContext(UserContext);
  
  function formHandle(e) {
    e.preventDefault();
    axios("http://localhost:4000/users/sign-in", {
      method: "post",
      data: {
        email: emailForm, password
      }
    })
    .then((response) => {
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
    })
    .catch((error) => {
      console.error(error.message);
    })
  }

  return (
      <section className="container mt-5">
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