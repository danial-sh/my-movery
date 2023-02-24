import React from "react";
import Locationgpprop from "./Locationgpprop";
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
export default function Locationap({data}) {
  // <div className="d-flex location-price-detail-groups-contain space-between"></div>
  return (
    <Swiper
    modules={[ Navigation,Pagination]}
    loop={true}

      navigation
      breakpoints={{
        968: {
          slidesPerView:5,
          spaceBetween:15
        },
      }}   
    >
          <SwiperSlide>
            <div className="location-contain">
              <div>
                <img src="images/main/ppl1.svg" alt="" />
              </div>
              <div className="location-info">
                <div className="location-contain-title">
                  <h3>Erholsame Yoga-Auszeit in der Chiemgauer Bergwel</h3>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/location_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Oyambre, Spanien</p>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/date_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Juni - September</p>
                </div>
                <div className="border"></div>
                <div className="address-contain d-flex">
                  <img
                    src="images/main/logo_owl.svg"
                    alt=""
                    className="address-img"
                  />
                  <div className="green-circles d-flex ">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="address-address">
                    <p>(143) TripAdvisor Reise-Bewertungen</p>
                  </div>
                </div>
                <div className="price-contain d-flex">
                  <p>
                    Ab
                    <span className="text-color price">850$</span>
                    Pro Nacht
                  </p>
                  <div className="d-flex align-center">
                    <p>Im Preis enthalten</p>
                    <img
                      src="images/main/shape.svg"
                      alt="111"
                      className="price-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="location-contain">
              <div>
                <img src="images/main/ppl2.svg" alt="" />
              </div>
              <div className="location-info">
                <div className="location-contain-title">
                  <h3>Erholsame Yoga-Auszeit in der Chiemgauer Bergwel</h3>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/location_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Oyambre, Spanien</p>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/date_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Juni - September</p>
                </div>
                <div className="border"></div>
                <div className="address-contain d-flex">
                  <img
                    src="images/main/logo_owl.svg"
                    alt=""
                    className="address-img"
                  />
                  <div className="green-circles d-flex ">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="address-address">
                    <p>(190) TripAdvisor Reise-Bewertungen</p>
                  </div>
                </div>
                <div className="price-contain d-flex">
                  <p>
                    Ab
                    <span className="text-color price">250$</span>
                    Pro Nacht
                  </p>
                  <div className="d-flex align-center">
                    <p>Im Preis enthalten</p>
                    <img
                      src="images/main/shape.svg"
                      alt="111"
                      className="price-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="location-contain">
              <div>
                <img src="images/main/ppl3.svg" alt="" />
              </div>
              <div className="location-info">
                <div className="location-contain-title">
                  <h3>Erholsame Yoga-Auszeit in der Chiemgauer Bergwel</h3>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/location_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Oyambre, Spanien</p>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/date_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Juni - September</p>
                </div>
                <div className="border"></div>
                <div className="address-contain d-flex">
                  <img
                    src="images/main/logo_owl.svg"
                    alt=""
                    className="address-img"
                  />
                  <div className="green-circles d-flex ">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="address-address">
                    <p>(142) TripAdvisor Reise-Bewertungen</p>
                  </div>
                </div>
                <div className="price-contain d-flex">
                  <p>
                    Ab
                    <span className="text-color price">650$</span>
                    Pro Nacht
                  </p>
                  <div className="d-flex align-center">
                    <p>Im Preis enthalten</p>
                    <img
                      src="images/main/shape.svg"
                      alt="111"
                      className="price-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="location-contain">
              <div>
                <img src="images/main/ppl4.svg" alt="" />
              </div>
              <div className="location-info">
                <div className="location-contain-title">
                  <h3>Erholsame Yoga-Auszeit in der Chiemgauer Bergwel</h3>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/location_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Oyambre, Spanien</p>
                </div>
                <div className="location-location-detail d-flex">
                  <img
                    src="images/main/date_blue.svg"
                    alt="qe"
                    className="location-image"
                  />
                  <p>Juni - September</p>
                </div>
                <div className="border"></div>
                <div className="address-contain d-flex">
                  <img
                    src="images/main/logo_owl.svg"
                    alt=""
                    className="address-img"
                  />
                  <div className="green-circles d-flex ">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="address-address">
                    <p>(900) TripAdvisor Reise-Bewertungen</p>
                  </div>
                </div>
                <div className="price-contain d-flex">
                  <p>
                    Ab
                    <span className="text-color price">900$</span>
                    Pro Nacht
                  </p>
                  <div className="d-flex align-center">
                    <p>Im Preis enthalten</p>
                    <img
                      src="images/main/shape.svg"
                      alt="111"
                      className="price-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
    </Swiper>
  );
}
