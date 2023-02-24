import { React } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/a11y";
import Beliebtemap from "./Beliebtemap";
import 'swiper/css/controller'
export default function Beliebte() {
  const info = [
    { img: "images/main/dest0.svg" ,countryname:'italy'},
    { img: "images/main/dest1.svg" ,countryname:'Russia'},
    { img: "images/main/dest2.svg" ,countryname:'Malasya'},
    { img: "images/main/dest3.svg" ,countryname:'Switzerland'},
    { img: "images/main/dest4.svg" ,countryname:'Netherland'},
    { img: "images/main/dest5.svg" ,countryname:'Germany'},
  ];
  return (
    <div className="main-beliebte fixer">
      <div className="entecke-title text-color" >
      <h3>Beliebte Reiseziele</h3>
      </div>
      <Beliebtemap data={info}/>
    </div>
  );
}
