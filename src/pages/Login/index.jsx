import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { UserContext } from "../../contexts/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, user, signIn } = useContext(UserContext);
  const navigate = useNavigate();
  
  async function formHandle(e) {
    e.preventDefault();
    
    if(await signIn(email, password)) {
      navigate("/dashboard");
    } else {
      return
    }
  }

  useEffect(() => {
    if(token !== "" && user !== "")
      navigate("/dashboard", {replace: true});
  }, []);

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
                    <input type="text" value={email} className="form-control" onChange={(event) => setEmail(event.target.value)} />
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