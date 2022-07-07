import { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayTitle from '../../components/DisplayTitle';
import loading from '../../images/loading-circular.gif';

const TableSerieA = () => {
  const [table, setTable] = useState([]);
  
  let time = null;
  useEffect(() => {
    clearTimeout(time);

    time = setTimeout(() => {
      console.log("[TableSerieA: Try request]");
      axios({
        method: "get",
        url: "http://localhost:4444/campeonato-brasileiro/table/A",
      })
      .then((response) => {
        setTable(response.data.table);
      })
      .catch((error) => {
        console.error(error);
      });
    }, 1000) 
  }, []);

  return (
    
    <section>
      <DisplayTitle title="Tabela - Série A" />
      <table className='table table-striped'>
        <tbody key="1">
          {table.length === 0 && <tr><td className='text-center'><img src={ loading } alt="Carregando" width={35} /></td></tr>}
          {
            table.map((team, index) => {
              return (
                <tr key={index}>
                  <td><strong>{team.position}</strong></td>
                  <td>
                    <img src={team.shield} alt={team.name} width="32" />
                  </td>
                  <td>{team.name}</td>
                  <td>{team.points} pontos</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </section>
  );
}

export default TableSerieA;