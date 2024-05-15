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
import disney from "../../assets/images/disney.png";
import ford from "../../assets/images/ford.png";
import latam from "../../assets/images/latam.png";
import coca from "../../assets/svg/coca.svg";
import fox from "../../assets/svg/fox.svg";
import san from "../../assets/svg/san.svg";
import linkedin from "../../assets/svg/Linkedin.svg";


const Carrusel = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          Impulsando a las empresas líderes del mundo{" "}
        </h1>
      </div>

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
            delay: 1500,
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
              <img src={bmw} alt="" width={200} />
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
              <img src={claro} alt="" width={200} />
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
              <img src={spo} alt="" width={200} />
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
              <img src={disney} alt="" width={200} />
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
              <img src={ford} alt="" width={200} />
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
              <img src={latam} alt="" width={200} />
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
              <img src={coca} alt="" width={200} />
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
              <img src={fox} alt="" width={200} />
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
              <img src={san} alt="" width={200} />
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
              <img src={linkedin} alt="" width={200} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrusel;
