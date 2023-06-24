import React from "react";
import { SwiperSlide } from "swiper/react";
import MySwiper from "../MySwiper";
import "./mainAbilities.scss";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

const mainAbilities = () => {
  return (
    <div className="section  mainAbilities-section-container">
      <h1>PRINCIPAIS HABILIDADES</h1>
      <div className="mainAbilities-section__swiper">
        <MySwiper>
          <SwiperSlide>
            <SiReact className="react-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiHtml5 className="html-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCss3 className="css-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiMysql className="sql-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiBootstrap className="bootstrap-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiJavascript className="javascript-icon" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCplusplus className="cPlusPlus-icon" />
          </SwiperSlide>
        </MySwiper>
      </div>
    </div>
  );
};

export default mainAbilities;
