import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function getPlayers() {
      const response = await fetch("http://localhost:8080/players");
      const players = await response.json();
      setPlayers(players);
      console.log(players)
    }
    getPlayers();
  }, []);

  return (
    <>
      <h1>Players Page</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/playerinfo/:${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
