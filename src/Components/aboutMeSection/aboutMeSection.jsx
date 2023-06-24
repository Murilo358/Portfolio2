import React from "react";
import "./aboutMeSection.scss";

import Me from "../../assets/Me.png";

const aboutMeSection = () => {
  return (
    <div className="section aboutme-section-container">
      <div className="aboutme-section-content">
        <img
          className="aboutme-section-content__image"
          data-aos="fade-right"
          data-aos-duration="800"
          src={Me}
          alt=""
        />
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="aboutme-section-description"
        >
          <h1>Sobre mim</h1>
          <p>
            Hello world!
            <br /> Sempre fui apaixonado por tudo que envolvesse técnologia. E
            após realizar o curso de manutenção e suporte em informatica da ETEC
            rapidamente descobri que programar seria a carreira que iria seguir.
            Atualmente estou cursando na universidade São Francisco o curso de
            análise e desenvolvimento de sistemas, e também realizando o curso
            de full stack da plataforma One Bit Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default aboutMeSection;
