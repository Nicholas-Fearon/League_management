import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

//test endpoint works
app.get("/", (req, res) => {
  res.send("It's actually working!");
  console.log(res);
});

/*endpoint to get single team
app.get("/teams", async function (req, res) {
  const result = await db.query("SELECT * FROM teams where id=1");
  const teams = result.rows;
  //send teams to the client
  res.json(teams);
});*/

//endpoint to get teams
app.get("/teams", async function (req, res) {
  const result = await db.query("SELECT * FROM teams");
  const teams = result.rows;
  //send teams to the client
  res.json(teams);
});

/*endpoint to single player
app.get("/player", async function (req, res) {
  const result = await db.query(`
    select 
players.id,
players.name,
players.position,
players.height,
players.dob,
players.birth_place
 from players
join teams on players.team_id = teams.id
where Players.id=1`);
  const player = result.rows;
  //send teams to the client
  res.json(player);
});*/

//endpoint to get roster from single team
app.get("/rosters/:id", async function (req, res) {
  console.log(req.params)
  const result = await db.query(`
    SELECT 
    teams.id AS team_id,
    teams.name AS team_name,
    players.id AS player_id,
    players.name AS player_name,
    players.position,
    players.height,
    players.dob,
    players.birth_place
FROM teams
JOIN players ON players.team_id = teams.id
WHERE teams.id = ${req.params.id}`);
  const roster = result.rows;
  //send teams to the client
  res.json(roster);
});

//endpoint to get all players
app.get("/players", async function (req, res) {
  const result = await db.query(`
    select 
players.id,
players.name,
players.position,
players.height,
players.dob,
players.birth_place
 from players
join teams on players.team_id = teams.id`);
  const players = result.rows;
  //send teams to the client
  res.json(players);
});

app.listen(8080, function () {
  console.log(`Server is running on port 8080`);
});
