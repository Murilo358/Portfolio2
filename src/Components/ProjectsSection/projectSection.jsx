import WorldMovies from "../../assets/WorldMovies.png";
import Xaus from "../../assets/Xaus.png";
import TaskMaster from "../../assets/TaskMaster.png";
import Weather from "../../assets/Weather.png";
import Dream from "../../assets/Dream-stay.png";

import "./projectSection.scss";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiFirebase,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNextdotjs,
  SiSupabase,
  SiSpring,
  SiSpringsecurity,
  SiRabbitmq,
  SiFlyway,
  SiMui,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import { Translator } from "../I18n";

const ProjectsSection = () => {
  return (
    <div className="section  projects-section-container">
      <h1 className="projects-section-container__h1">
        {" "}
        <Translator path="projects.title" />
      </h1>
      <div className="projects-section-content">
        <div className="projects-section-content-project">
          <img
            className="projects-section-content-project__image"
            src={Xaus}
            alt=""
          />
          <div
            className="projects-section-content-project__description "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1>
              <Translator path="projects.xaus.title" />
            </h1>
            <Translator path="projects.subtitle" />
            <div className="projects-section-content-project__description-icons ">
              <div data-tooltip="Java">
                <FaJava />
              </div>
              <div data-tooltip="Spring boot">
                <SiSpring />
              </div>
              <div data-tooltip="Spring boot security">
                <SiSpringsecurity />
              </div>
              <div data-tooltip="FlyWay">
                <SiFlyway />
              </div>
              <div data-tooltip="Javascript">
                <SiJavascript />
              </div>
              <div data-tooltip="React">
                <SiReact />
              </div>
              <div data-tooltip="Material UI">
                <SiMui />
              </div>
              <div data-tooltip="TailWind">
                <SiTailwindcss />
              </div>
              <div data-tooltip="Postgresql">
                <SiPostgresql />
              </div>
              <div data-tooltip="Supabase">
                <SiSupabase />
              </div>
              <div data-tooltip="Amazon aws">
                <FaAws />
              </div>
              <div data-tooltip="Redis">
                <SiRedis />
              </div>
              <div data-tooltip="RabbitMq">
                <SiRabbitmq />
              </div>
            </div>
            <p>
              <Translator path="projects.xaus.description" />
            </p>
            <div className="projects-section-content-project__description-buttons ">
              <a rel="noreferrer" target="_blank" href="http://3.84.41.122/">
                <button>
                  <Translator path="projects.demo" />
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Murilo358/XAUS-FRONT"
              >
                <button>
                  <Translator path="projects.frontend" />
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Murilo358/XAUS-BACKEND"
              >
                <button>
                  <Translator path="projects.backend" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="projects-section-content-project">
          <div
            className="projects-section-content-project__description "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1>
              <Translator path="projects.dreamStay.title" />
            </h1>
            <Translator path="projects.subtitle" />
            <div className="projects-section-content-project__description-icons">
              <div data-tooltip="HTML5">
                <SiHtml5 />
              </div>
              <div data-tooltip="CSS">
                <SiCss3 />
              </div>
              <div data-tooltip="React">
                <SiReact />
              </div>
              <div data-tooltip="Typescript">
                <SiTypescript />
              </div>
              <div data-tooltip="TailWind">
                <SiTailwindcss />
              </div>
              <div data-tooltip="Prisma">
                <SiPrisma />
              </div>
              <div data-tooltip="Supabase">
                <SiSupabase />
              </div>
              <div data-tooltip="Next.js">
                <SiNextdotjs />
              </div>
              <div data-tooltip="Git">
                <SiGit />
              </div>
            </div>
            <p>
              <Translator path="projects.dreamStay.description" />
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                href="https://dream-stay.vercel.app"
                target="_blank"
              >
                <button>
                  <Translator path="projects.demo" />
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/Murilo358/DreamStay"
                target="_blank"
              >
                <button>
                  <Translator path="projects.repository" />
                </button>
              </a>
            </div>
          </div>
          <img
            className="projects-section-content-project__image"
            src={Dream}
            alt=""
          />
        </div>
        <div className="projects-section-content-project">
          <img
            className="projects-section-content-project__image"
            src={TaskMaster}
            alt=""
          />
          <div
            className="projects-section-content-project__description "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1>
              {" "}
              <Translator path="projects.taskMaster.title" />
            </h1>
            <Translator path="projects.subtitle" />
            <div className="projects-section-content-project__description-icons">
              <div data-tooltip="HTML5">
                <SiHtml5 />
              </div>
              <div data-tooltip="CSS">
                <SiCss3 />
              </div>
              <div data-tooltip="Javascript">
                <SiJavascript />
              </div>
              <div data-tooltip="React">
                <SiReact />
              </div>
              <div data-tooltip="Firebase">
                <SiFirebase />
              </div>

              <div data-tooltip="Git">
                <SiGit />
              </div>
            </div>
            <p>
              <Translator path="projects.taskMaster.description" />
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                href="https://todolist-murilo358.vercel.app/"
                target="_blank"
              >
                <button>
                  <Translator path="projects.demo" />
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/Murilo358/todolist"
                target="_blank"
              >
                <button>Repositório</button>
              </a>
            </div>
          </div>
        </div>
        <div className="projects-section-content-project">
          <div
            className="projects-section-content-project__description "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1>
              {" "}
              <Translator path="projects.worldMovies.title" />
            </h1>
            <Translator path="projects.subtitle" />
            <div className="projects-section-content-project__description-icons ">
              <div data-tooltip="HTML5">
                <SiHtml5 />
              </div>
              <div data-tooltip="Css">
                <SiCss3 />
              </div>
              <div data-tooltip="Javascript">
                <SiJavascript />
              </div>
              <div data-tooltip="React">
                <SiReact />
              </div>
              <div data-tooltip="Bootstrap">
                <SiBootstrap />
              </div>
              <div data-tooltip="Git">
                <SiGit />
              </div>
            </div>
            <p>
              <Translator path="projects.worldMovies.description" />
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://worldmovies-gamma.vercel.app"
              >
                <button>Demo</button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Murilo358/WorldMovies"
              >
                <button>Repositório</button>
              </a>
            </div>
          </div>
          <img
            className="projects-section-content-project__image"
            src={WorldMovies}
            alt=""
          />
        </div>

        <div className="projects-section-content-project">
          <img
            className="projects-section-content-project__image"
            src={Weather}
            alt=""
          />
          <div
            className="projects-section-content-project__description "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1>
              {" "}
              <Translator path="projects.weatherApp.title" />
            </h1>
            <Translator path="projects.subtitle" />
            <div className="projects-section-content-project__description-icons ">
              <div data-tooltip="HTML5">
                <SiHtml5 />
              </div>
              <div data-tooltip="CSS">
                <SiCss3 />
              </div>
              <div data-tooltip="Javascript">
                <SiJavascript />
              </div>
            </div>
            <p>
              <Translator path="projects.weatherApp.description" />
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://murilo358.github.io/Weather/"
              >
                <button>
                  <Translator path="projects.demo" />
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Murilo358/Weather"
              >
                <button>Repositório</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
