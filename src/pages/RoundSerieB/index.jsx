import axios from "axios";

import { useEffect, useState } from "react";
import DisplayTitle from "../../components/DisplayTitle"

const RoundsSerieB = () => {
  const [matches, setMatches] = useState([]);

  let time = null;
  useEffect(() => {
    time = setTimeout(() => {
      console.log("[RoundsSerieB: Try request]");
      axios({
        url: "http://localhost:4444/campeonato-brasileiro/matches/B",
        method: "get"
      })
      .then((response) => {
        setMatches(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
    }, 1000) ;
    return(() => clearTimeout(time));
  }, []);

  return (
    <>
      <DisplayTitle title="Jogos da Rodada - Série B" />
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
                  {(match.team[2] && (
                    <td className="text-center">
                      {match.team[0]} <strong>{match.team[1]}</strong> X <strong>{match.team[2]}</strong> {match.team[3]}</td>
                  ))}
                  {(!match.team[2] && <td className="text-center">{`${match.team[0]} X ${match.team[1]}`}</td>)}
                  <td>{match.date.day}/{match.date.month}</td>
                  <td>{match.stadium}</td>
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

export default RoundsSerieB;