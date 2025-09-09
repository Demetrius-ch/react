import "./Superheros.css";
import Superhero from "./Superhero/Superhero";
export default function Superheros(props) {
  return (
    <>
      <h2 className="text-3xl mt-3 uppercase font-semibold text-white"> Top 3 des Superhéros</h2>
      <div className="superheros">{props.children}</div>
    </>
  );
}
