import "./Superhero.css";
import { useState } from "react";
export default function Superhero({
  nom,
  description = "Pas de description pour l'instant",
  films = ["Aucun titre pour ce superhero"],
  photo = "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
  details ="Aucun nouveau détail pour l'instant.",
  prefere,
  superheroClique = () => {},
  ...props
}) {
  const [montrerLesDetails, setMontrerLesDetails] = useState(false);

  return (
    <div
      className={`superhero ${prefere && "superheroPrefere"}`}
      onClick={() => superheroClique(nom)}
    >
      <img src={photo} alt={`${nom} photo`} />

      <h2>{nom}</h2>
      <p>{description}</p>
      {/**Details */}
      <div
        className="readmore"
        onClick={() =>
          setMontrerLesDetails((statePrecedent) => !statePrecedent)
        }
      >
        {montrerLesDetails ? "Masquer les détails" : "En savoir plus"}
      </div>

      {montrerLesDetails ? (
        <div style={{ whiteSpace: "pre-line" }}>{details}</div>
      ) : null}
      {/**Films */}
      <div style={{ marginTop: 10 }}>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
