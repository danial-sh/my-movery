import React from 'react'
import Footerswiperprop from './Footer-swiper-prop'
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
export default function Footerswipermap({data}) {
  return (
        <div className="footer-before fixer ">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        Pagination={true}
        navigation
        breakpoints={{
          1440:{
            slidesPerView:6
          },
          968:{
              slidesPerView:5
          },
          768:{
            slidesPerView:4,
          },
          680:{slidesPerView:4,},
          530:{slidesPerView:3,},
          450:{slidesPerView:3},
          380:{slidesPerView:2}
        }}
      >
         {data.map((v,i)=>{return <SwiperSlide>
        <div className='footer-before-icons'>
            <img src={v.img} alt="qwe" />    
        </div>  
        </SwiperSlide>
         })}
      </Swiper>
      </div>
  )
}
