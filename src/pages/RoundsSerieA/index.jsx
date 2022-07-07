import axios from "axios";

import { useEffect, useState } from "react";
import DisplayTitle from "../../components/DisplayTitle"

const RoundsSerieA = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:4444/campeonato-brasileiro/matches/A",
      method: "get"
    })
    .then((response) => {
      setMatches(response.data.matches);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

  return (
    <>
      <DisplayTitle title="Jogos da Rodada - Série A" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Times</th>
            <th>Data</th>
            <th>Local</th>
            <th className="text-center">Apostas</th>
          </tr>
        </thead>
        <tbody>
          {
            matches.map((match, index) => {
              return(
                <tr key={index}>
                  {(match.teams[2] && (
                    <td className="text-center">{`${match.teams[0]} ${match.teams[1]} X ${match.teams[2]} ${match.teams[3]}`}</td>
                  ))}
                  {(!match.teams[2] && <td>{`${match.teams[0]} X ${match.teams[1]}`}</td>)}
                  <td>{match.date[0]}</td>
                  <td>{match.date[1]}</td>
                  <td className="text-center"><div className="badge bg-secondary">0</div></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default RoundsSerieA;