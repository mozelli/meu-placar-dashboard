import { useState, useContext, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';

import axios from "axios";
import DisplayTitle from "../../components/DisplayTitle";
import { MatchesContext } from "../../contexts/MatchesContext";
import { TablesContext } from "../../contexts/TablesContext";

const Tools = () => {

  const { scrapTables, alertMessageTables } = useContext(TablesContext);
  const {scrapMatches, loading, alertMessageMatches} = useContext(MatchesContext);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  
  async function updateTable(serie) {
    setMessage("");
    setStatus("");
    
    await scrapTables(serie);
    
    if(alertMessageMatches.message !== "") {
      setMessage(alertMessageMatches.message);
      setStatus(alertMessageTables.status);
    }
    if(alertMessageTables.message !== "") {
      setMessage(alertMessageTables.message);
      setStatus(alertMessageTables.status);
    }
  }

  async function updateMatches(serie) {
    setMessage("");
    setStatus("");
    
    await scrapMatches(serie);

    if(alertMessageMatches.message !== "") {
      setMessage(alertMessageMatches.message);
      setStatus(alertMessageTables.status);
    }
    if(alertMessageTables.message !== "") {
      setMessage(alertMessageTables.message);
      setStatus(alertMessageTables.status);
    }
  }

  return (
    <section>
      <DisplayTitle title="Ferramentas" />
      <div className="row">
        <div className="col-12">
          {status === "error" && <Alert variant="danger">{message}</Alert>}
          {status === "success" && <Alert variant="success">{message}</Alert>}
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title text-center">Atualizar tabela Série A</h5>  
              <button className="btn btn-warning mt-2" onClick={() => updateTable("A")}>Atualizar</button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Atualizar tabela Série B</h5>  
              <button className="btn btn-warning mt-2" onClick={() => updateTable("B")}>Atualizar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title text-center">Atualizar Jogos Série A</h5>  
            <button className="btn btn-warning mt-2" onClick={() => updateMatches("A")}>Atualizar</button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Atualizar Jogos Série B</h5>  
              <button className="btn btn-warning mt-2" onClick={() => updateMatches("B")}>Atualizar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;