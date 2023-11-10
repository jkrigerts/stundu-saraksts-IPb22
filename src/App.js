import { useEffect, useState } from "react";

import Diena from "./Diena";

// Mūsu uzdevums ir dabūt datus no API

function App() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLessons() {
      const response = await fetch(
        "https://cheese-cake.onthewifi.com/api/lessons"
      );
      const data = await response.json();
      // Parādi tikai masīvu ar stundām
      console.log(data.IPb22);
      const cleansedData = [
        {
          diena: "Pirmdiena",
          stundas: data.IPb22[0].classes,
        },
        {
          diena: "Otrdiena",
          stundas: data.IPb22[1].classes,
        },
        {
          diena: "Trešdiena",
          stundas: data.IPb22[2].classes,
        },
        {
          diena: "Ceturdiena",
          stundas: data.IPb22[3].classes,
        },
        {
          diena: "Piektdiena",
          stundas: data.IPb22[4].classes,
        },
      ];
      // Ieliec datus stāvokļa mainīgajā
      setLessons(cleansedData);
      setLoading(false);
    }

    getLessons();
  }, []);

  // Uztaisa useEffect un console.log(data)
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
  const dienasJSX = lessons.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });
  return (
    <>
      <div>Šīs nedēļas stunas, paldies, Matīsss</div>
      {loading ? <p>Loading...</p> : dienasJSX}
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
