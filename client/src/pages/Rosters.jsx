import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Rosters() {
  const [rosters, setRosters] = useState([]);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    async function getRosters() {
      const response = await fetch(`http://localhost:8080/rosters/${id}`);
      const rosters = await response.json();
      console.log(rosters);
      setRosters(rosters);
    }
    getRosters();
  }, [id]);

  return (
    <>
      <h1>Roster page</h1>

      <ul>
        {rosters.map((roster) => (
          <li key={roster.id}>{roster.name}</li>
        ))}
      </ul>
    </>
  );
}
