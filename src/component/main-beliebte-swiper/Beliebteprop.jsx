import React from "react";
import { SwiperSlide } from 'swiper/react'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/bundle";
export default function Beliebteprop(props) {
  return (
    <SwiperSlide className="main-beliebte-items">
    <div>
      <img src={props.img} alt="qwe" />
      <div className="entdecke-content white-text">
        <p>{props.countryname}</p>
        <span>15 offer</span>
      </div>
    </div>
    </SwiperSlide>
  );
}
