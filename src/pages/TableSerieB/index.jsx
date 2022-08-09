import { useContext } from 'react';
import { useEffect } from 'react';

import DisplayTitle from '../../components/DisplayTitle';
import { TablesContext } from '../../contexts/TablesContext';
import loadingIcon from '../../images/loading-circular.gif';

const TableSerieB = () => {
  const {tableSerieB, loadTable, loading} = useContext(TablesContext);

  useEffect(() => {
    loadTable();
  }, []);

  return (
    
    <section>
      <DisplayTitle title="Tabela - Série B" />
      <table className='table table-striped'>
        <tbody key="1">
        {loading && <tr><td className='text-center'><img src={ loadingIcon } alt="Carregando" width={35} /></td></tr>}
          {
            tableSerieB.map((team, index) => {
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