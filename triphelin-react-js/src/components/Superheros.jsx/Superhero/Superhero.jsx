import "./Superhero.css";
import { useState } from "react";
import { createPortal } from "react-dom";
export default function Superhero({
  nom,
  description = "Pas de description pour l'instant",
  films = ["Aucun titre pour ce superhero"],
  photo = "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
  details = "Aucun nouveau détail pour l'instant.",
  prefere,
  superheroClique = () => {},
  ...props
}) {
  //States
  const [montrerLesDetails, setMontrerLesDetails] = useState(false);
  const [affficherModale, setAfficherModale] = useState(false);
  // Fonction propagation
  const nomClique = (evenement) => {
    evenement.stopPropagation();
    setAfficherModale(true);
  };

  return (
    <div
      className={`superhero ${prefere && "superheroPrefere"}`}
      onClick={() => superheroClique(nom)}
      style={{ position: "relative" }}
    >
      {affficherModale &&
        createPortal(
          <div
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              position: "absolute",
              bottom: 0,
              right: 0,
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(evenement) => {
              evenement.stopPropagation();
              setAfficherModale(false);
            }}
          >
            <div style={{ padding: 30, background: "white" }}>
              <b>Informations</b>
              <ul>
                <li>Taille : 1,85</li>
                <li>Couleur des cheveux : Noirs</li>
                <li>Couleur des yeux : Bleus</li>
              </ul>
            </div>
          </div>,
          document.querySelector("body")
        )}
      <img src={photo} alt={`${nom} photo`} />

      <h2 onClick={(evenement) => nomClique(evenement)}>{nom}</h2>
      <p>{description}</p>
      {/**Details */}
      <div
        className="readmore"
        onClick={(evenement) => {
          evenement.stopPropagation();
          setMontrerLesDetails((statePrecedent) => !statePrecedent);
        }}
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
