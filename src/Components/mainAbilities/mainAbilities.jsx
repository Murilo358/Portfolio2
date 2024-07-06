import "./mainAbilities.scss";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiSass,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiSpring,
  SiSpringsecurity,
  SiRabbitmq,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Translator } from "../I18n";

const MainAbilities = () => {
  return (
    <div className="section  mainAbilities-section-container">
      <h1>
        <Translator path="skills.title" />
      </h1>
      <div className="mainAbilities-section-container__align">
        <div className="mainAbilities-section-container__content">
          <SiHtml5 />
          <SiCss3 />
          <SiSass />
          <SiBootstrap />
          <SiJavascript />
          <SiReact />
          <DiJava />
          <SiSpring />
          <SiSpringsecurity />
          <SiRabbitmq />
          <SiPostgresql />
          <SiGit />
          <SiPhp />
          <SiLaravel />
        </div>
      </div>
    </div>
  );
};

export default MainAbilities;
