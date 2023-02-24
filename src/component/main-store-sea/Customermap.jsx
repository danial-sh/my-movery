import React from "react";
import Customerporp from "./Customerporp";
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
export default function Customermap({ data }) {
  return (
        <Swiper
         modules={[Navigation,Pagination]}
           navigation
          
           pagination={true}
           breakpoints={{
            820:{
              slidesPerView:3,
              pagination:true,
              spaceBetween:18
            },
            768:{
              slidesPerView:2,
              pagination:true,
              spaceBetween:12,
            }
           }}
           
         >
    <div className="d-flex space-between">
      {data.map((v, i) => {
        return (
          <SwiperSlide>
              <div className="customer-rate radius">
            <div className="customer-container-1 d-flex space-between gp-firstpic">
              <div className="d-flex align-center">
                <h3 className="name">{v.name}</h3>
                <div className="star d-flex">
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                </div>
              </div>
              <div className="coment-date d-flex align-center">
                <img
                  src="images/main/date_gray.svg"
                  alt="qe"
                  className="name date-img"
                />
                <span>25.05.2022</span>
              </div>
            </div>
            <div className="coment-content gp-firstpic">
              <p>
                {v.comment}
              </p>
            </div>
            <div className="border"></div>
            <div className="customer-coment-picture d-flex ">
              <img src={v.pic} alt="qwe" className="coment-pic resize-img "/>
              <p>{v.picname}</p>
            </div>
          </div>
          </SwiperSlide>
        );
      })}
    </div>
    </Swiper>
  );
}
