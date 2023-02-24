import React from "react";
import Entdeckemap from "./Entdeckemap";
export default function Entdecke() {
  const info = [
    { img: "images/main/surf.svg", text: "Surfen" },
    { img: "images/main/fitness.svg", text: "Fitness" },
    { img: "images/main/yoga_img.svg", text: "Yoga" },
    { img: "images/main/kamp.svg", text: "Kampfsport" },
  ];
  return (
    <div className="main-entdecke  fixer">
        <div className="entecke-title text-color">
            <h3 className="">
            Entdecke Reisen für deine Sportart
            </h3>
        </div>
        <div className="d-flex entdeckegp">
        
        <Entdeckemap data={info}/>
      <div className="entdecke-difpic white-text d-flex">
        <div className="entdecke-difpic-img d-flex radius">
            <img src="images/main/wandern.svg" alt="qwe" className="radius"/>
            <div className="entdecke-content">
                <p>Wandern</p>
                <span>14 offer</span>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
