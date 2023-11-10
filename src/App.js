import Diena from "./Diena";

function App() {
  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥",
  ];
  const otrdienasStundas = ["Cita stunda", "Vēl stunda"];

  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: [
        "Sports pie Klintas",
        "Dabaszinības mīlu fiziku",
        "Vēsture",
        "🫥",
      ],
    },
    {
      diena: "Otrdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Trešdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Ceturtdiena",
      stundas: [
        "IM done Edmunds",
        "let me go",
        "when will the friday come",
        "🫥",
      ],
    },
    {
      diena: "Piektdiena",
      stundas: [
        "Atdot Railijam datoru stunda",
        "Nu gan viss?",
        "AAudzināšana",
        "🫥",
      ],
    },
  ];

  // Kā visasStundas pārtais'oit par masīvu?
  const dienasJSX = visasStundas.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });
  return (
    <>
      <div>Šīs nedēļas stunas, paldies, Matīsss</div>
      {dienasJSX}
    </>
  );
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js

// JS - .forEach() ir masīvu metode,
// kura apskata ikkatru masīva elementu,
// bet neko neatgriež (nav return)

// JS - .map() ir masīvu metode,
// kura apskata ikkatru masīva elementu
// un atgriež jaunu masīvu (return Array)

//
