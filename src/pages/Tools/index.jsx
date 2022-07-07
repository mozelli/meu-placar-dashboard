import { useState } from "react";
import { Link } from 'react-router-dom';

import axios from "axios";
import DisplayTitle from "../../components/DisplayTitle";
import Toast from 'react-bootstrap/Toast';
import { Row, Col, Button } from "react-bootstrap";

const Tools = () => {

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [toastTitle, setToastTitle] = useState("")
  
  function updateTableSerieA() {
    axios({
      url: "http://localhost:4444/campeonato-brasileiro/scrap-table/A",
      method: "put"
    })
    .then((response) => {
      console.log("Update success!");
      setShow(true);
      setToastTitle("Tabela atualizada com sucesso!");
    })
    .then((error) => {
      console.error(error);
      setError(true);
      setShow(true);
      setToastTitle("Ops! Ocorreu um erro...");
    });
  }

  return (
    <>
      <DisplayTitle title="Ferramentas" />
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title text-center">Atualizar tabela Série A</h5>  
              <Link to="/" className="btn btn-warning mt-2">Atualizar</Link>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Atualizar tabela Série B</h5>  
              <Link to="/" className="btn btn-warning mt-2">Atualizar</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title text-center">Atualizar Partidas Série A</h5>  
              <Link to="/" className="btn btn-warning mt-2">Atualizar</Link>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Atualizar Partidas Série B</h5>  
              <Link to="/" className="btn btn-warning mt-2">Atualizar</Link>
            </div>
          </div>
        </div>
      </div>

      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{toastTitle}</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body></Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  );
}

export default Tools;