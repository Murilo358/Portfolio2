import "./mainAbilities.scss";
import {
  SiReact,
  SiTailwindcss,
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
  SiApachekafka,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Translator } from "../I18n";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";

const MainAbilities = () => {
  const { t } = useTranslation();

  return (
    <div className="section  mainAbilities-section-container">
      <IconContext.Provider value={{ className: "shared-class", size: 120 }}>
        <h1>
          <Translator path="skills.title" />
        </h1>
        <p>
          {" "}
          <Translator path="skills.mousePlacement" />
        </p>
        <div className="mainAbilities-section-container__align">
          <div className="mainAbilities-section-container__content">
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Java")}
            >
              <DiJava />
              <p>Java</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.SpringBoot")}
            >
              <SiSpring />
              <p>Spring boot</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.SpringSecurity")}
            >
              <SiSpringsecurity />
              <p>Spring security</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.PostgreSQL")}
            >
              <SiPostgresql />
              <p>Postgresql</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.JavaScript")}
            >
              <SiJavascript />
              <p>JavaScript</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.React")}
            >
              <SiReact />
              <p>React</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.RabbitMQ")}
            >
              <SiRabbitmq />
              <p>RabbitMQ</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Kafka")}
            >
              <SiApachekafka />
              <p>Kafka</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Git")}
            >
              <SiGit />
              <p>Git</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Tailwind")}
            >
              <SiTailwindcss />
              <p>TailWind</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Bootstrap")}
            >
              <SiBootstrap />
              <p>Bootstrap</p>
            </div>

            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Sass")}
            >
              <SiSass />
              <p>Sass</p>
            </div>

            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.PHP")}
            >
              <SiPhp />
              <p>PHP</p>
            </div>
            <div
              className="tooltip tooltip-big mainAbilities-skills-description"
              data-tooltip={t("skills.Laravel")}
            >
              <SiLaravel />
              <p>Laravel</p>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default MainAbilities;
