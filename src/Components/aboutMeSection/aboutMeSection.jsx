import React from "react";
import "./aboutMeSection.scss";

import Me2 from "../../assets/Me2.png";
import { TfiDownload } from "react-icons/tfi";
const aboutMeSection = () => {
  return (
    <div className="section aboutme-section-container">
      <div className="aboutme-section-content">
        <img
          className="aboutme-section-content__image"
          data-aos="fade-right"
          data-aos-duration="800"
          src={Me2}
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
            <br /> Desde sempre, tenho sido apaixonado por tudo o que envolve
            tecnologia. A minha paixão se intensificou após concluir o curso de
            manutenção e suporte em informática na ETEC, quando percebi que a
            programação seria o meu caminho profissional. Atualmente, estou
            cursando análise e desenvolvimento de sistemas na Universidade São
            Francisco e também me aprimorando por meio do curso de full stack
            oferecido pela plataforma One Bit Code.
          </p>
          <a href={Me2} download>
            <button>
              Currículo <TfiDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default aboutMeSection;
