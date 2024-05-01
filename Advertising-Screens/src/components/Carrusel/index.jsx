import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar, Autoplay } from "swiper/modules";
import "./index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import bmw from "../../assets/images/bmw.png";
import claro from "../../assets/images/claro.png";
import spo from "../../assets/images/spo.png";
import nike from "../../assets/images/nike.png";
import disney from "../../assets/images/disney.png";
import ford from '../../assets/images/ford.png';
import latam from "../../assets/images/latam.png"


const Carrusel = () => {
  return (
    <>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Scrollbar, Autoplay]}
          className="mySwipe"
          loop={true}
          spaceBetween={50}
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={bmw} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={claro} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={spo} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={nike} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={disney} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={ford} alt="" width={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider-item ">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={latam} alt="" width={100} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
