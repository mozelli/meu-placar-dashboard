import { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayTitle from '../../components/DisplayTitle';
import loading from '../../images/loading-circular.gif';

const TableSerieB = () => {
  const [table, setTable] = useState([]);
  
  let time = null;
  useEffect(() => {

    time = setTimeout(() => {
      console.log("[TableSerieA: Try request]");
      axios({
        method: "get",
        url: "http://localhost:4444/campeonato-brasileiro/table/B",
      })
      .then((response) => {
        setTable(response.data.table);
      })
      .catch((error) => {
        console.error(error);
      });
    }, 1000);
    
    return(() => clearTimeout(time));
  }, []);

  return (
    
    <section>
      <DisplayTitle title="Tabela - Série B" />
      <table className='table table-striped'>
        <tbody key="1">
        {table.length === 0 && <tr><td className='text-center'><img src={ loading } alt="Carregando" width={35} /></td></tr>}
          {
            table.map((team, index) => {
              return (
                <tr key={index}>
                  <td className='text-center'><strong>{team.position}</strong></td>
                  <td className='text-center'>
                    <img src={team.shield} alt={team.name} width="32" />
                  </td>
                  <td>{team.name}</td>
                  <td><strong>{team.points}</strong> pontos</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </section>
  );
}

export default TableSerieB;