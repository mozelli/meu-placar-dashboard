import axios from "axios";

import { useEffect, useState } from "react";
import DisplayTitle from "../../components/DisplayTitle"

const RoundsSerieB = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:4444/campeonato-brasileiro/matches/B",
      method: "get"
    })
    .then((response) => {
      setMatches(response.data.matches);
    })
    .catch((error) => {
      console.error(error);
    })
  });

  return (
    <>
      <DisplayTitle title="Jogos da Rodada - Série B" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Times</th>
            <th>Data</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {
            matches.map((match, index) => {
              return(
                <tr key={index}>
                  {(match.teams[2] && (
                    <td>{`${match.teams[0]} ${match.teams[1]} X ${match.teams[2]} ${match.teams[3]}`}</td>
                  ))}
                  {(!match.teams[2] && <td>{`${match.teams[0]} X ${match.teams[1]}`}</td>)}
                  <td>{match.date[0]}</td>
                  <td>{match.date[1]}</td>
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