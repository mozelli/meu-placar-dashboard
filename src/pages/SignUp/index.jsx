import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value ) {
      return setError("As senhas informadas devem ser iguais.");
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess("Novo usuário cadastrado com sucesso!");
    } catch(error){
      console.error(error);
      setError("Falha ao tentar cadastar um novo usuário.");
    }
    setLoading(false);
  }

  return (
    <div className="container d-flex justify-content-center" style={{minHeight: "100vh"}} >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h5>Cadastro</h5>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="form-label">E-mail</div>
                <input type="email" className="form-control" ref={emailRef} required />
              </div>
              <div className="mb-3">
                <div className="form-label">Senha</div>
                <input type="password" className="form-control"  ref={passwordRef} />
              </div>
              <div className="mb-3">
                <div className="form-label">Confirme a senha</div>
                <input type="password" className="form-control"  ref={passwordConfirmRef} />
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-primary" disabled={loading}>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;