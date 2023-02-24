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
import Footerswipermap from "./Footer-swiper-map";
export default function Footerswiper() {
  const info = [
    { img: "images/main/logo1.svg" },
    { img: "images/main/logo2.svg" },
    { img: "images/main/logo3.svg" },
    { img: "images/main/logo4.svg" },
    { img: "images/main/logo5.svg" },
    { img: "images/main/logo6.svg" },
  ];
  return (
    <Footerswipermap data={info}/>
  );
}
