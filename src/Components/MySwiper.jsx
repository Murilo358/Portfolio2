import { Children, useState } from "react";
import { Navigation, Pagination, Scrollbar, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MySwiper(props) {
  return (
    <Swiper
      className="cards-swiper"
      modules={[Scrollbar, Autoplay, FreeMode]}
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
      speed={2000}
      FreeMode={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      // breakpoints={{
      //   0: {
      //     navigation: false,
      //     slidesPerView: 3,
      //     spaceBetween: 10,
      //     slidesPerGroup: 3,
      //   },
      //   580: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //     slidesPerGroup: 2,
      //   },
      //   775: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //     slidesPerGroup: 3,
      //   },
      //   995: {
      //     slidesPerView: 4,
      //     spaceBetween: 20,
      //     slidesPerGroup: 4,
      //   },
      //   1400: {
      //     slidesPerView: 5,
      //     spaceBetween: 20,
      //     slidesPerGroup: 5,
      //   },
      // }}
    >
      {props.children}
    </Swiper>
  );
}

export default MySwiper;
