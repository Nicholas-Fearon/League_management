import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export default function Rosters() {
  const [rosters, setRosters] = useState([]);
  const { id } = useParams();
  console.log("Fetched id:=", id);

  useEffect(() => {
    async function getRosters() {
      const response = await fetch(
        `https://league-management.onrender.com/rosters/${id}`
      );
      const rosters = await response.json();
      console.log(rosters);
      setRosters(rosters);
    }
    getRosters();
  }, [id]);

  return (
    <>
      <h1> </h1>

      <ul>
        {rosters.map((roster) => (
          <li key={roster.id}>
            <div>
            <h3>{roster.player_name}</h3>
            <p>Height: {roster.height}</p>
            <p>Position: {roster.position}</p>
            <p>From: {roster.birth_place}</p>
            <p>DOB: {roster.dob}</p>
            <p></p>
            </div>
            
          </li>
        ))}
      </ul>
    </>
  );
}
