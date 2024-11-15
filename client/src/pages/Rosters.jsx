import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Rosters() {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    async function getRosters() {
      const response = await fetch(`http://localhost:8080/teams/${id}`);
      const players = await response.json();
      console.log(players);
      setPlayers(players);
    }
    getRosters();
  }, [id]);

  return (
    <>
      <h1>Roster page</h1>

      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </>
  );
}
