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
  SiDocker,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Translator } from "../I18n";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

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
          <div className="mainAbilities-section-c1ontainer__content grid-container">
            <div>
              <Tooltip
                title={t("skills.Java")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <DiJava />
                  <p>Java</p>
                </div>
              </Tooltip>
            </div>

            <div>
              <Tooltip
                title={t("skills.SpringBoot")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiSpring />
                  <p>Spring boot</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.SpringSecurity")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiSpringsecurity />
                  <p>Spring security</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.PostgreSQL")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiPostgresql />
                  <p>Postgresql</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.JavaScript")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiJavascript />
                  <p>JavaScript</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.React")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiReact />
                  <p>React</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.RabbitMQ")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiRabbitmq />
                  <p>RabbitMQ</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Kafka")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiApachekafka />
                  <p>Kafka</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Docker")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiDocker />
                  <p>Docker</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Git")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiGit />
                  <p>Git</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Tailwind")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiTailwindcss />
                  <p>TailWind</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Bootstrap")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiBootstrap />
                  <p>Bootstrap</p>
                </div>
              </Tooltip>
            </div>

            <div>
              <Tooltip
                title={t("skills.Sass")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiSass />
                  <p>Sass</p>
                </div>
              </Tooltip>
            </div>

            <div>
              <Tooltip
                title={t("skills.PHP")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiPhp />
                  <p>PHP</p>
                </div>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title={t("skills.Laravel")}
                position="top"
                trigger="mouseenter"
              >
                <div className=" mainAbilities-skills-description">
                  <SiLaravel />
                  <p>Laravel</p>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default MainAbilities;
