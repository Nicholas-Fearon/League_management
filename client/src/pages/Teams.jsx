import {useState, useEffect} from "react";
    
  
export default function Teams() {
    const [teams, setTeams] = useState([]);
useEffect(() => {
    async function getTeams() {
        const response = await fetch("http://localhost:8080/teams");
        const teams = await response.json();
        console.log(teams);
        setTeams(teams)
      }
      getTeams();
    },[])
      


    return (<>
    <h1>Teams Page</h1>
        <ul>
            {teams.map((team) => <li key={team.id}>{team.name}</li>)}
        </ul>
    </>)
}