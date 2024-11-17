// Playerinfo.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Playerinfo() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPlayer() {
      const response = await fetch(
        `https://league-management.onrender.com/player/${id}`
      );
      const data = await response.json();
      setPlayer(data);
    }
    fetchPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h1>{player.player_name}</h1>
      <p>Position: {player.position}</p>
      <p>Team: {player.team_name}</p>
    </div>
  );
}
