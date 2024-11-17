import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Playerinfo() {
  const [playerInfo, setPlayerInfo] = useState([]);
  const { id } = useParams();
  console.log("fetched id:" ,id);
 

  useEffect(() => {
    async function getPlayerInfo() {
      const response = await fetch(`http://localhost:8080/players/${id}`);
      const playerInfo = await response.json();

      setPlayerInfo(playerInfo);
      console.log(playerInfo);
    }
    getPlayerInfo();
  }, [id]);

  return (
    <>
      <h1>Player Info</h1>
      {<p>{playerInfo.name}</p>}
    </>
  );
}
