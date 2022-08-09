import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { UsersContext } from "../../contexts/UsersContext";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signed, loading } = useContext(UsersContext);
  
  async function handleSubmit(e) {
    e.preventDefault();
    await signIn(email, password);
  }

  if(signed) return <Navigate to="dashboard" />

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h5>Login</h5>
            </div>
            {/* {alertMessage.status === "error" && <Alert variant="danger">{alertMessage.message}</Alert>} */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="form-label">E-mail</div>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <div className="form-label">Senha</div>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
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