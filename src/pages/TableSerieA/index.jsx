import { useContext, useEffect, useState } from 'react';

import { TablesContext } from '../../contexts/TablesContext';
import DisplayTitle from '../../components/DisplayTitle';

import loadingIcon from '../../images/loading-circular.gif';

const TableSerieA = () => {
  const {tableSerieA, loadTable, loading} = useContext(TablesContext);
  
  // let time = null;
  useEffect(() => {
    loadTable("A");
  },[]);

  return (
    
    <section>
        <DisplayTitle title="Tabela - Série A" />
        <table className='table table-striped'>
          <tbody key="1">
            {loading && <tr><td className='text-center'><img src={ loadingIcon } alt="Carregando" width={35} /></td></tr>}
            {
              tableSerieA.map((team, index) => {
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