import { useContext, useState } from "react";

import { UsersContext } from "../../contexts/UsersContext";
import Alert from "react-bootstrap/Alert";

const SignUp = () => {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [permition, setPermition] = useState("");

  const {addNewUser, loadingUsers, alertMessageUsers} = useContext(UsersContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if(password === passwordConfirm) {
      const data = {
        name, 
        lastname, 
        email, 
        password,
        day, 
        month, 
        year,
        permition 
      }
      console.log(data);
      await addNewUser(data);
    }
  }

  return (
    <div className="container d-flex justify-content-center" style={{minHeight: "100vh"}} >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <h5>Cadastro</h5>
            </div>
            <p>{alertMessageUsers.status}</p>
            {alertMessageUsers.status === "error" && <Alert variant="danger">{alertMessageUsers.message}</Alert>}
            {alertMessageUsers.status === "success" && <Alert variant="success">{alertMessageUsers.message}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-12">
                  <label className="form-label" htmlFor="name">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    className="form-control" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="lastname" className="form-label">Sobrenome</label>
                  <input 
                    type="text" 
                    id="lastname"
                    className="form-control" 
                    value={lastname} 
                    onChange={(e) => setLastName(e.target.value)} 
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    className="form-control" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
              </div>
              <div className="row mb-3">
              <label htmlFor="day" className="form-label">Data de nascimento</label>
                <div className="col-4">
                  <input 
                    type="text"
                    placeholder="dia"
                    id="day"
                    className="form-control"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className="col-4 mb-3">
                  <input 
                    type="text"
                    placeholder="mês"
                    id="month"
                    className="form-control"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)} />
                </div>
                <div className="col-4 mb-3">
                  <input 
                    type="text"
                    placeholder="ano"
                    id="year"
                    className="form-control"
                    value={year}
                    onChange={(e) => setYear(e.target.value)} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="permition" className="form-label">Permissão</label>
                  <select 
                    id="permition" 
                    defaultValue={permition} 
                    onChange={(e) => setPermition(e.target.value)}
                  >
                    <option value="">Escolha</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="password" className="form-label">Senha</label>
                  <input 
                    type="password" 
                    id="password"
                    className="form-control" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="passwordConfirm" className="form-label">Confirme a senha</label>
                  <input 
                    type="password"
                    id="passwordConfirm" 
                    className="form-control" 
                    value={passwordConfirm} 
                    onChange={(e) => setPasswordConfirm(e.target.value)} 
                  />
                </div>
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-primary" disabled={loadingUsers}>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;