import "./mainAbilities.scss";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiCplusplus,
  SiFirebase,
  SiGit,
  SiSass,
  SiVite,
  SiPhp,
  SiLaravel,
  SiPostgresql,
} from "react-icons/si";

const mainAbilities = () => {
  return (
    <div className="section  mainAbilities-section-container">
      <h1> HABILIDADES</h1>
      <div className="mainAbilities-section-container__align">
        <div className="mainAbilities-section-container__content">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiBootstrap />
          <SiSass />
          <SiMysql />
          <SiFirebase />
          <SiCplusplus />
          <SiGit />
          <SiVite />
          <SiPhp />
          <SiLaravel />
          <SiPostgresql />
        </div>
      </div>
    </div>
  );
};

export default mainAbilities;
