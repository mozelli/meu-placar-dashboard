import { Link } from "react-router-dom";
import DisplayTitle from "../../components/DisplayTitle";

const Home = () => {

  return (
    <div>
      <DisplayTitle title="Painel de Controle" />
      <div className="row">

        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center red-500">
                Usuários
              </h5>
              <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                  <span>Cadastrados:</span> <div><span className="badge bg-success">0</span></div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Online:</span> <div><span className="badge bg-success">0</span></div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Visitantes hoje:</span> <div><span className="badge bg-success">0</span></div>
                </li>
              </ul>
              <Link to="/" className="btn btn-success mt-4">Ver mais</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;