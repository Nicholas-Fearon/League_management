import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function getTeams() {
      const response = await fetch("http://localhost:8080/teams");
      const teams = await response.json();
      console.log(teams);
      setTeams(teams);
    }
    getTeams();
  }, []);

  return (
    <>
      <h1>Teams Page</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
