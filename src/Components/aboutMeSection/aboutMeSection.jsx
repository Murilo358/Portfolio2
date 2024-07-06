import "./aboutMeSection.scss";
import englishResume from "/Resume.pdf";
import portugueseResume from "/Currículo.pdf";
import pic1 from "../../assets/pic01.png";
import { TfiDownload } from "react-icons/tfi";
import { Translator } from "../I18n";
import { useTranslation } from "react-i18next";
const AboutMeSection = () => {
  const { i18n } = useTranslation();

  return (
    <div className="section aboutme-section-container">
      <div className="aboutme-section-content">
        <img
          className="aboutme-section-content__image"
          data-aos="fade-right"
          data-aos-duration="800"
          src={pic1}
          alt=""
        />
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="aboutme-section-description"
        >
          <h1>
            <Translator path="about.title" />
          </h1>
          <p>
            <Translator path="about.hello" />
            <br />
            <Translator path="about.text" />
          </p>
          <a
            href={i18n.language == "pt-BR" ? portugueseResume : englishResume}
            download
          >
            <button>
              <Translator path="about.resume" /> <TfiDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
