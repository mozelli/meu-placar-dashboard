import { Link } from "react-router-dom";
import DisplayTitle from "../../components/DisplayTitle";

const CampeonatoBrasileiro = () => {
  return (
    <div>
      <DisplayTitle title="Campeonato Brasileiro" />
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Série A
              </h5>
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action d-flex justify-content-between">
                  <strong>Jogos hoje:</strong> <div><span className="badge bg-success">0</span></div>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action d-flex justify-content-between">
                  <strong>Apostas rolando:</strong> <div><span className="badge bg-success">0</span></div>
                </Link>
              </div>
              <Link to="/dashboard/tabela-serie-a" className="btn btn-secondary card-link mt-4">Tabela</Link>
              <Link to="/dashboard/jogos-da-rodada-serie-a" className="btn btn-secondary card-link mt-4">Jogos da Rodada</Link>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">
                Série B
              </h5>
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action d-flex justify-content-between">
                  <strong>Jogos hoje:</strong> <div><span className="badge bg-success">0</span></div>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action d-flex justify-content-between">
                  <strong>Apostas rolando:</strong> <div><span className="badge bg-success">0</span></div>
                </Link>
              </div>
              <Link to="/dashboard/tabela-serie-b" className="btn btn-secondary card-link mt-4">Tabela</Link>
              <Link to="/dashboard/jogos-da-rodada-serie-b" className="btn btn-secondary card-link mt-4">Jogos da Rodada</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampeonatoBrasileiro;