import React from "react";
import EXpmap from "./EXpmap";
export default function Experence() {
  const info = [
    {
      text: "Mit unserer quailitätsgeprüften Auswahl aus über 300 Reisen findest du garantiert die beste Reise für dich und deine Bedürfnisse.",
    },
    {
      text: "Im Preis enthalten sind immer die Unterkunft, das Sportprogramm und die Ausrüstung; Je nach Reise auch die Verpflegung und weitere Leistungen.",
    },
    {
      text: "Für das Sport- & Aktivprogramm hast du immer einen qualifizierten Lehrer an deiner Seite.",
    },
  ];
  return (
    <div className="experience fixer d-flex">
      <div className="experience-images d-flex">
        <div className="exp-long">
        <div className="exp-first-pic radius">
          <img src="images/main/experience.svg" alt="44" className="radius" />
        </div>
        <div className="exp-second-pic radius">
          <img src="images/main/ds1.svg" alt="33" className="radius" />
        </div>
        <div className="exp-third-pic radius">
          <img src="images/main/ds2.svg" alt="22" className="radius" />
        </div>
        <div className="exp-fourd-pic">
          <img src="images/main/play.svg" alt="12" className="fourd-img" />
        </div>
        </div>
      </div>
      <div className="experience-content">
        <div className="entecke-title text-color">
          <h3 className="">Erlebe die besondere Art zu Reisen</h3>
        </div>
        <p className="color-text">
          Urlaub mit moverii bedeutet unvergessliche Erlebnisse als rundum
          Wohlfühl Paket:
        </p>
        <EXpmap data={info}/>
      </div>
    </div>
  );
}
