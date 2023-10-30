import "./firstSection.scss";
import { FaWhatsapp } from "react-icons/fa";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
function FirstSection() {
  return (
    <div className="first-section-container section">
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        className="first-section__h1"
      >
        {" "}
        ME CHAMO
      </h1>
      <h1
        data-aos="fade-right"
        data-aos-duration="900"
        className="first-section__h1"
      >
        MURILO BARBOSA
      </h1>
      <h5
        data-aos="fade-right"
        data-aos-duration="1100"
        className="first-section__h5"
      >
        SOU UM DESENVOLVEDOR FULL STACK
      </h5>
      <div className="first-section__socialmedia-icons">
        <a
          rel="noreferrer"
          href="https://github.com/Murilo358"
          target="_blank"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <ImGithub />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/murilo-barbosa-da-cunha-6297ba1b6/"
          target="_blank"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <ImLinkedin />
        </a>
        <a
          rel="noreferrer"
          href="https://wa.me//5511995329951?text=Olá%20Murilo"
          target="_blank"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:murilobarbosa358@gmail.com?subject = Feedback&body = Message"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
}

export default FirstSection;
