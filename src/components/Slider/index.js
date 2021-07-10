import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./slider.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/G1.JPG" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G2.JPG" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G3.JPG" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G4.jpg" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G5.jpg" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G6.JPG" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G7.JPG" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G9.jpg" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G11.jpeg" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G12.jpg" alt='g1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/G13.jpg" alt='g1'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
