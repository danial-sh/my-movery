import React from "react";
import Justmap from "./Justmap";
export default function Justify() {
  const info = [
    { text: "... deinen Urlaub aktiv erleben willst" },
    { text: "... die Natur entdecken und bewusst reisen willst" },
    { text: "... lokale Anbieter unterstützen willst" },
    { text: " ... offen für neue Menschen und Kulturen bist" },
    { text: "... dir keine Sorgen um die Qualität oder Organisation machen willst" },
  ];
  return (
    <div className="fixer">
      <div className="d-flex main-justify">
        <div className="main-justify-images d-flex">
          <img
            src="images/main/hold_img.svg"
            alt="wqe"
            className="justify-first-pic"
          />
          <img
            src="images/main/orange_full.svg"
            alt="qwe"
            className="justify-second-pic radius"
          />
        </div>
        <div className="main-justify-content">
          <div className="entecke-title text-color">
            <h3> Ein Urlaub mit moverii passt zu dirwenn du…</h3>
          </div>
            <Justmap data={info}/>
        </div>
      </div>
    </div>
  );
}
