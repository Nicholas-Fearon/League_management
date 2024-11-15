import { useEffect, useState } from "react";

export default function Players() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function getPlayers() {
            const response = await fetch("http://localhost:8080/players");
            const players = await response.json();
            console.log(players);
            setPlayers(players)
          }
          getPlayers();
        },[])


  return (
    <>
      <h1>Players Page</h1>
      <ul>
            {players.map((player) => <li key={player.id}>{player.name}</li>)}
        </ul>
    </>
  );
}
