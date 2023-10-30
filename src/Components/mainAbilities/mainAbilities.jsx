import "./mainAbilities.scss";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiSass,
  SiVite,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiSpring,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const mainAbilities = () => {
  return (
    <div className="section  mainAbilities-section-container">
      <h1> HABILIDADES</h1>
      <div className="mainAbilities-section-container__align">
        <div className="mainAbilities-section-container__content">
          <SiHtml5 />
          <SiCss3 />
          <SiSass />
          <SiBootstrap />
          <SiJavascript />
          <SiReact />
          <SiVite />
          <DiJava />
          <SiSpring />
          <SiMysql />
          <SiPostgresql />
          <SiGit />
          <SiPhp />
          <SiLaravel />
        </div>
      </div>
    </div>
  );
};

export default mainAbilities;
