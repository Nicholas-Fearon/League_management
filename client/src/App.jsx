import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Teams from "./pages/teams";
import Rosters from "./pages/Rosters"
import Players from "./pages/players";
import Home from "./pages/Home";

export default function App() {

  

  return (
    <>
      <Nav />

      <h1>Hi</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Rosters />} />
        <Route path="/players" element={<Players />}></Route>
        <Route path="/players/:id" element={<Players />}></Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
}
