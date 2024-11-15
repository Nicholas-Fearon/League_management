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

//endpoint to get teams
app.get("/teams", async function (req, res) {
  const result = await db.query("SELECT * FROM teams");
  const teams = result.rows;
  //send teams to the client
  res.json(teams);
});

//endpoint to get players
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
  const teams = result.rows;
  //send teams to the client
  res.json(teams);
});

app.listen(8080, function () {
  console.log(`Server is running on port 8080`);
});
