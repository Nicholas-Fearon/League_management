import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Teams from "./pages/teams";
import Rosters from "./pages/Rosters";

import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Rosters />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
}
