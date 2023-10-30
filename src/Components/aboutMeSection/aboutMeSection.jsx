import "./aboutMeSection.scss";
import Curriculo from "/Curriculo.pdf";
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
            <br />
            Sou um desenvolvedor full stack com experiência em Java, Javascript
            e PHP, incluindo conhecimentos em PostgreSQL, Laravel, Spring Boot e
            React. Atualmente, estou cursando Análise e Desenvolvimento de
            Sistemas na Universidade São Francisco. Estou constantemente
            aprimorando minhas habilidades e explorando novos desafios. Se
            quiser conhecer meus projetos ou discutir oportunidades de
            colaboração, fique à vontade para entrar em contato!
          </p>
          <a href={Curriculo} download>
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
