import React from 'react'
import Gpprop from './Gpprop'
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
export default function Gpmap({data}) {
  return (
    <div className='gp-container d-flex'>
      <Swiper
         modules={[Navigation,Pagination]}
         loop={true}
           navigation
           pagination={true}
           breakpoints={{
            820:{
              slidesPerView:3,
              spaceBetween:18
            },
            768:{
              slidesPerView:2,
              spaceBetween:12,
            }
           }}
         >
        {data.map((v,i)=>{return <SwiperSlide>
          <div className="d-flex gp-contain">
      <img src={v.firstpic} alt="" className="gp-firstpic" />
      <img src={v.secondpic} alt="" className="gp-second-pic" />
    </div>
        </SwiperSlide>})}
      </Swiper>
    </div>
  )
}
