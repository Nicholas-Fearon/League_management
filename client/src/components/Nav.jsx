import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <Link to={"/"}>Home</Link>
      <Link to={"/teams"}>Teams</Link>
      <Link to={"/players"}>Players</Link>
    </>
  );
}
