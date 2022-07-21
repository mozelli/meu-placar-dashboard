import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../contexts/AuthContext";

const SignIn = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/", {replace: true});
    } catch(error){
      console.error(error);
      setError("Falha no login.");
    }
    setLoading(false);
  }

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h5>Login</h5>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="form-label">E-mail</div>
                <input type="email" className="form-control" ref={emailRef} required />
              </div>
              <div className="mb-3">
                <div className="form-label">Senha</div>
                <input type="password" className="form-control"  ref={passwordRef} />
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-primary" disabled={loading}>Entrar</button>
              </div>
            </form>
          </div>
          <div className="row my-3">
            <div className="col text-center">
              <small className="text-secondary">Desenvolvido por João Mozelli Neto</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;