import "./App.css";
import Superhero from "./components/Superheros.jsx/Superhero/Superhero";
import Superheros from "./components/Superheros.jsx/Superheros";
import { useState } from "react";
export default function App() {
  const [superheroPrefere, setSuperheroPrefere] = useState();
  const [nomDuSuperhero, setNomDuSuperhero] = useState("Anonyme");
  const [descriptionDuSuperhero, setDescriptionDuSuperhero] = useState(
    "Pas de description pour l'instant"
  );
  const [photoDuSuperhero, setPhotoDuSuperhero] = useState("git");

  const superheroClique = (nom) => {
    setSuperheroPrefere(nom);
  };
  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/**Superhero numéro 1 */}
        <Superhero
          nom="Spider-man"
          description=" Peter Parker, alias Spider-Man, est un super-héros évoluant dans
        l'univers Marvel de la maison d'édition Marvel Comics."
          details="En France (souvent traduit par l'Homme Araignée ou simplement l'Araignée), le personnage apparaît pour la première fois en mai 1969, dans le no 4 du périodique Fantask, publié aux Éditions Lug. Il s'agit en fait de la traduction du premier numéro de The Amazing Spider-Man datant de 1963. Ses origines, parues un an plus tôt dans Amazing Fantasy #15, ne seront publiées en français qu'en 1980 dans un album d'Iron-Man édité chez Arédit/Artima, puis en 1981 chez Lug dans un numéro spécial de sa revue Strange[3].

Lors de sa première apparition dans Amazing Fantasy, Spider-Man est l'identité que se choisit le jeune Peter Parker après avoir été mordu par une araignée radioactive et découvert qu'il avait à cette occasion développé des super-pouvoirs. Le succès de ce numéro permet à Spider-Man d'avoir dès 1963 sa propre série, The Amazing Spider-Man.

Spider-Man est depuis lors l'un des personnages les plus populaires de l'univers des comics. Au fil des ans, d'autres périodiques lui seront consacrés, tels Spectacular Spider-Man et Peter Parker, the Spider-Man, mais The Amazing Spider-Man est toujours le magazine principal du héros.

Peter Parker meurt dans le numéro 700 de The Amazing Spider-Man mais un nouveau Spider-Man reprend le flambeau lorsque l'esprit du Docteur Octopus occupe le corps de Parker[4]. Cependant, une part de Peter demeure en vie et cohabite avec l'esprit d'Octopus dans son propre corps et le criminel laisse finalement l'âme de Peter récupérer son corps.

Le personnage a été interprété par quatre acteurs au cinéma : Nicholas Hammond pour les films tirés de la série télévisée The Amazing Spider-Man en 1978 et 1979, Tobey Maguire pour une trilogie de Sam Raimi de 2002 à 2007, Andrew Garfield pour deux films en 2012 et 2014 puis Tom Holland depuis 2016, à la suite d'un accord avec Sony Pictures, propriétaire des droits du personnage au cinéma, qui a intégré Spider-Man dans l'univers cinématographique Marvel. En 2021, le film Spider-Man: No Way Home réunit exceptionnellement les trois derniers acteurs, qui partagent l'affiche grâce au concept du multivers de Marvel. "
          prefere={superheroPrefere == "Spider-man"}
          superheroClique={superheroClique}
          photo="./spiderman.webp"
        />
        {/**Superhero numero 2 */}

        <Superhero
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant
            dans l'univers Marvel de la maison d'édition Marvel Comics"
          details="Iron Man est le personnage de super-héros d'Anthony Edward Tony Tony Stark, un homme d'affaires et ingénieur qui dirige la société de fabrication d'armes Stark Industries. Lorsque Stark est capturé dans une zone de guerre et subit une grave blessure au cœur, il construit son armure Iron Man et échappe à ses ravisseurs. Les costumes d'armure d'Iron Man lui confèrent une force surhumaine, un vol, une projection d'énergie et d'autres capacités. Le personnage a été créé en réponse à la guerre du Viêt Nam en tant que tentative de Lee de créer un personnage pro-guerre sympathique. Depuis sa création, Iron Man a été utilisé pour explorer des thèmes politiques, avec les premières histoires d'Iron Man se déroulant dans la guerre froide. Le rôle du personnage en tant que fabricant d'armes s'est avéré controversé, et Marvel s'est éloigné de la géopolitique dans les années 1970. Au lieu de cela, les histoires ont commencé à explorer des thèmes tels que les troubles civils, le progrès technologique, l'espionnage des entreprises, l'alcoolisme et l'autorité gouvernementale.

Les histoires de Major Iron Man incluent « Demon in a Bottle » (1979), Armor Wars (1987-1988), Extremis « (2005), et « Iron Man 2020 » (2020). Il est également un personnage de premier plan dans les histoires de la guerre de (2006-2007), Dark Reign (2008-2009) et Civil War II (2016). D'autres personnages de super-héros ont émergé de la casting de soutien d'Iron Man, dont James Rhodes dans le rôle de War Machine et Riri Williams en tant qu'Ironheart, ainsi que des méchants réformés, Natasha Romanova dans le rôle de Black Widow et Clint Barton dans le rôle de Hawkeye. La liste des ennemis d'Iron Man comprend son ennemi juré, le mandarin, diverses super-vilaines d'origine communiste, et de nombreux rivaux d'affaires de Stark.

Robert Downey Jr. a interprété Tony Stark dans Iron Man (2008), le premier film de l'univers cinématographique Marvel, et a continué à incarner le personnage jusqu'à son apparition finale dans Avengers: Endgame (2019). La représentation de Downey a popularisé le personnage, élevant Iron Man dans l'un des super-héros les plus reconnaissables de Marvel. D'autres adaptations du personnage apparaissent dans des films animés vidéo, des séries télévisées et des jeux vidéo. "
          prefere={superheroPrefere == "Iron Man"}
          superheroClique={superheroClique}
          photo="./ironman.webp"
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
        />
        {/**Superhero numéro 3 */}
        <Superhero
          nom="Captain American"
          description="  Steven « Steve » Rogers, alias Captain America est un super-héros
        évoluant dans l'univers Marvel de la maison d'édition Marvel Comics"
          details="Captain America est un super-héros créé par Joe Simon et Jack Kirby qui apparaît dans les bandes dessinées américaines publiées par Marvel Comics. Le personnage est apparu pour la première fois dans Captain America Comics no 1, publié le 20 décembre 1940, par Timely Comics, un prédécesseur de Marvel. L'identité civile de Captain America est Steven « Steve » Rogers, un homme fragile rehaussé par le pic de perfection physique humaine par un « sérum super-soldat » expérimental après avoir rejoint l'armée des États-Unis pour aider le pays dans la Seconde Guerre mondiale. Équipé d'un drapeau américain - costume inspiré et d'un bouclier pratiquement indestructible, Captain America et son acolyte Bucky Barnes se sont affrontés fréquemment avec le villainous Red Skull et d'autres membres des puissances de l'Axe. Dans les derniers jours de la guerre, un accident a fait geler Captain America dans un état d'animation suspendue jusqu'à ce qu'il soit ressuscité dans les temps modernes. Il reprend ses exploits en tant que héros costumé et devient le chef de l'équipe de super-héros que les Avengers, mais se bat souvent en tant qu'« homme en dehors du temps » pour s'adapter à la nouvelle ère.

Le personnage est rapidement apparu comme la création la plus populaire et le plus réussie de temps de guerre de Timely lors de sa publication originale, bien que la popularité des super-héros ait diminué dans la période d'après-guerre et que Captain America Comics ait été abandonnée en 1950. Le personnage a connu une reprise de courte durée en 1953 avant de revenir à la bande dessinée en 1964 et est depuis resté en publication continue. La création de Captain America en tant que anti-Nazifigure explicitement anti-nazie était une entreprise politique délibérée : Simon et Kirby étaient fermement opposés aux actions de l'Allemagne nazie et des partisans de l'intervention des États-Unis pendant la Seconde Guerre mondiale, Simon concevant spécifiquement le personnage en réponse au mouvement de non-interventionnisme américain. Les messages politiques sont par la suite restés un trait caractéristique des histoires de Captain America, les écrivains utilisant régulièrement le personnage pour commenter l'état de la société et du gouvernement américains.

Après avoir paru dans plus de dix mille histoires, Captain America est l'un des personnages de Marvel Comics les plus populaires et les plus reconnus, et a été décrit comme une icône de la culture populaire américaine. Bien que Captain America n'ait pas été le premier super-héros sur le thème des États-Unis, il deviendra le plus populaire et le plus durable des nombreux super-héros américains patriotiques créés pendant la Seconde Guerre mondiale. Captain America a été le premier personnage de Marvel à apparaître dans un média en dehors des bandes dessinées, dans le film en série Captain America de 1944; le personnage est par la suite apparu dans une variété de films et d'autres médias, y compris l'univers cinématographique Marvel, où il a été interprété par l'acteur Chris Evans de la première apparition du personnage dans Captain America: The First Avenger (2011) jusqu'à son apparition finale dans Avengers: Endgame."
          prefere={superheroPrefere == "Captain American"}
          superheroClique={superheroClique}
          photo="./captain.webp"
        />
        <Superhero
          nom={nomDuSuperhero}
          description={
            descriptionDuSuperhero != "" ? descriptionDuSuperhero : undefined
          }
          photo={photoDuSuperhero != "" ? photoDuSuperhero : undefined}
        />
        {/**Paramétrage */}
        <div
          style={{
            border: "1px solid black",
            padding: "15px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Crée ton propre superhero</h3>{" "}
          <div style={{ marginTop: 15 }}>
            <label htmlFor="photo">Photo</label>

            <input
              type="text"
              name="photo"
              id="photo"
              value={photoDuSuperhero}
              onChange={(event) => setPhotoDuSuperhero(event.target.value)}
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 15 }}>
            <label htmlFor="nom">Nom</label>

            <input
              type="text"
              name="nom"
              id="nom"
              value={nomDuSuperhero}
              onChange={(event) => setNomDuSuperhero(event.target.value)}
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={descriptionDuSuperhero}
              onChange={(event) =>
                setDescriptionDuSuperhero(event.target.value)
              }
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
      </Superheros>
    </main>
  );
}
