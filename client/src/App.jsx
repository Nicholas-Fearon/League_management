import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Teams from "./pages/Teams";
import Rosters from "./pages/Rosters";
import Players from "./pages/players";
import Home from "./pages/Home";
import Playerinfo from "./pages/Playerinfo";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Rosters />} />
        <Route path="/players" element={<Players />}></Route>
        <Route path="/playerinfo/:id" element={<Playerinfo />}></Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
}
