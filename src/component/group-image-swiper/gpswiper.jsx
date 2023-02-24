import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/a11y";
import Gpmap from "./Gpmap";
export default function Gpswiper() {
  const firs = [
    { firstpic: "images/main/insp1.svg", secondpic: "images/main/insp2.svg" },
    { firstpic: "images/main/insp3.svg" ,secondpic:'images/main/insp4.svg'},
    {firstpic:'images/main/insp5.svg',secondpic:'images/main/insp6.svg'}
  ];
  return (
    <div className="fixer gp-swiper">
      <div className="entecke-title text-color">
        <h3>Inspiration für deinen aktiven Urlaub</h3>
      </div>
        <Gpmap data={firs}/>
    </div>
  );
}
