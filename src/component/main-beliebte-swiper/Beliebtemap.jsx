import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Parallax, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/a11y";
import Beliebteprop from './Beliebteprop'
export default function Beliebtemap({data}) {
  return (
    <Swiper
    modules={[ Navigation,Pagination]}
    navigation
    loop={true}
    pagination={true}
    breakpoints={
      {
        968:{
           slidesPerView:5,
           spaceBetween:17, 
        },
        820:{
          slidesPerView:4,
          spaceBetween:14,
        },
        768:{
          slidesPerView:4,
          spaceBetween:13,
        },
        680:{
          slidesPerView:4,
          spaceBetween:13,
        },
        450:{
          slidesPerView:3,
          spaceBetween:11,
        },
        380:{
          slidesPerView:2,
          spaceBetween:10,
        }
      }
    }
  >


        {data.map((v,i)=>{return <SwiperSlide>
    <div className="main-beliebte-items d-flex">
      <img src={v.img}alt="qwe" className='beli-image'/>
      <div className="entdecke-content white-text">
        <p>{v.countryname}</p>
        <span>15 offer</span>
      </div>
    </div>
    </SwiperSlide>})}
    </Swiper>
  )
}
