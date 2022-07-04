import { useEffect, useState } from 'react';
import axios from 'axios';

import loading from '../../images/loading-circular.gif';
import styles from './table.module.scss';

const Table = () => {

  const [table, setTable] = useState([]);

  function refreshTable() {
    setTable([]);
    axios.put("http://localhost:4444/teams/scrap-table")
    .then((responseRefresh) => {
      if(!responseRefresh.data.error) {
        getTable();
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function getTable() {
    axios("http://localhost:4444/teams")
    .then((response) => {
      setTable(response.data.teams);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getTable();
  },[]);

  return (
    <section className={ styles.table }>
      <h3>Tabela Campeonato Brasileiro - Série B</h3>
      <div className={ styles.topMenu }>
        <div className="buttonGroup">
          <button onClick={() => refreshTable()}>Atualizar Tabela</button>
          <button>Trocar Tabela</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Clubes</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
        { table.length <= 0 && <tr className={styles.loading}><td colSpan={4}><img src={loading} alt="Carregando a tabela de classificação." /></td></tr>}
        {
          table.map((team, index) => {
            return(
              <tr key={index} className={ styles.team }>
                <td className={ styles.teamPosition }>{team.position}</td>
                <td className={ styles.teamShield }>
                  <img src={team.shield} alt={team.name} />
                </td>
                <td className={ styles.teamName }>{team.name}</td>
                <td className={ styles.teamPoints }>{team.points}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </section>
  );
}

export default Table;