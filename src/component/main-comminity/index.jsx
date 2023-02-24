import React from "react";
import Comminitymap from "./comminitymap";
export default function Comminity() {
  const info = [
    {
      img: "images/main/like_white.svg",
      title: "100% Rückerstattung",
      text: "Transparent und stressfrei! Erhalte mit unseren flexiblen Stornierungsbedingungen den vollen Betrag zurückerstattet.",
    },
    {
      img: "images/main/start_white.svg",
      title: "Qualitätsgeprüfte Reisen",
      text: "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit mindestens 4,5 von 5 Sternen bewertet!",
    },
    {
      img: "images/main/heart_white.svg",
      title: "Persönliche Beratung",
      text: "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit mindestens 4,5 von 5 Sternen bewertet!",
    },
  ];
  return (
    <Comminitymap data={info} />
    // <div className="comminity d-flex">
    //   <div className="d-flex cominity-detail ">
    //     <div className="cominity-img ">
    //       <img src="images/main/like_white.svg" alt="qwe" />
    //     </div>
    //     <div className="comminity-title">
    //       <h3 className="large-text text-color">100% Rückerstattung</h3>
    //     </div>
    //     <div className="cominity-content comminity-title">
    //       <p className="text-color">
    //         Transparent und stressfrei! Erhalte mit unseren flexiblen
    //         Stornierungsbedingungen den vollen Betrag zurückerstattet.
    //       </p>
    //     </div>
    //     <div className="comminity-link d-flex cursor">
    //       <a href="#">
    //         Zu den Details{" "}
    //       </a>
    //         <img
    //           src="images/main/right_arrow_black.svg"
    //           className="link-icon"
    //           alt="qwe"
    //         />
    //     </div>
    //   </div>
    // </div>
  );
}
