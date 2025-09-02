import "./Superheros.css";
import Superhero from "./Superhero/Superhero";
export default function Superheros(props) {
  return (
    <div className="superheros">{props.children}</div>
  
  );
}
