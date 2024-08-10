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
import { Tooltip } from "react-tippy";

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
              <Tooltip title="Java" position="top" trigger="mouseenter">
                <div>
                  <FaJava />
                </div>
              </Tooltip>
              <Tooltip title="Spring boot" position="top" trigger="mouseenter">
                <div>
                  <SiSpring />
                </div>
              </Tooltip>
              <Tooltip
                title="Spring boot security"
                position="top"
                trigger="mouseenter"
              >
                <div>
                  <SiSpringsecurity />
                </div>
              </Tooltip>
              <Tooltip title="FlyWay" position="top" trigger="mouseenter">
                <div>
                  <SiFlyway />
                </div>
              </Tooltip>
              <Tooltip title="Javascript" position="top" trigger="mouseenter">
                <div>
                  <SiJavascript />
                </div>
              </Tooltip>
              <Tooltip title="React" position="top" trigger="mouseenter">
                <div>
                  <SiReact />
                </div>
              </Tooltip>
              <Tooltip title="Material UI" position="top" trigger="mouseenter">
                <div>
                  <SiMui />
                </div>
              </Tooltip>
              <Tooltip title="TailWind" position="top" trigger="mouseenter">
                <div>
                  <SiTailwindcss />
                </div>
              </Tooltip>
              <Tooltip title="Postgresql" position="top" trigger="mouseenter">
                <div>
                  <SiPostgresql />
                </div>
              </Tooltip>
              <Tooltip title="Supabase" position="top" trigger="mouseenter">
                <div>
                  <SiSupabase />
                </div>
              </Tooltip>
              <Tooltip title="Amazon aws" position="top" trigger="mouseenter">
                <div>
                  <FaAws />
                </div>
              </Tooltip>
              <Tooltip title="Redis" position="top" trigger="mouseenter">
                <div>
                  <SiRedis />
                </div>
              </Tooltip>
              <Tooltip title="RabbitMq" position="top" trigger="mouseenter">
                <div>
                  <SiRabbitmq />
                </div>
              </Tooltip>
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
              <Tooltip title="HTML5" position="top" trigger="mouseenter">
                <div>
                  <SiHtml5 />
                </div>
              </Tooltip>
              <Tooltip title="CSS" position="top" trigger="mouseenter">
                <div>
                  <SiCss3 />
                </div>
              </Tooltip>
              <Tooltip title="React" position="top" trigger="mouseenter">
                <div>
                  <SiReact />
                </div>
              </Tooltip>
              <Tooltip title="Typescript" position="top" trigger="mouseenter">
                <div>
                  <SiTypescript />
                </div>
              </Tooltip>
              <Tooltip title="TailWind" position="top" trigger="mouseenter">
                <div>
                  <SiTailwindcss />
                </div>
              </Tooltip>
              <Tooltip title="Prisma" position="top" trigger="mouseenter">
                <div>
                  <SiPrisma />
                </div>
              </Tooltip>
              <Tooltip title="Supabase" position="top" trigger="mouseenter">
                <div>
                  <SiSupabase />
                </div>
              </Tooltip>
              <Tooltip title="Next.js" position="top" trigger="mouseenter">
                <div>
                  <SiNextdotjs />
                </div>
              </Tooltip>
              <Tooltip title="Git" position="top" trigger="mouseenter">
                <div>
                  <SiGit />
                </div>
              </Tooltip>
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
              <Tooltip title="HTML5" position="top" trigger="mouseenter">
                <div>
                  <SiHtml5 />
                </div>
              </Tooltip>
              <Tooltip title="CSS" position="top" trigger="mouseenter">
                <div>
                  <SiCss3 />
                </div>
              </Tooltip>
              <Tooltip title="Javascript" position="top" trigger="mouseenter">
                <div>
                  <SiJavascript />
                </div>
              </Tooltip>
              <Tooltip title="React" position="top" trigger="mouseenter">
                <div>
                  <SiReact />
                </div>
              </Tooltip>
              <Tooltip title="Firebase" position="top" trigger="mouseenter">
                <div>
                  <SiFirebase />
                </div>
              </Tooltip>

              <Tooltip title="Git" position="top" trigger="mouseenter">
                <div>
                  <SiGit />
                </div>
              </Tooltip>
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
              <Tooltip title="HTML5" position="top" trigger="mouseenter">
                <div>
                  <SiHtml5 />
                </div>
              </Tooltip>
              <Tooltip title="Css" position="top" trigger="mouseenter">
                <div>
                  <SiCss3 />
                </div>
              </Tooltip>
              <Tooltip title="Javascript" position="top" trigger="mouseenter">
                <div>
                  <SiJavascript />
                </div>
              </Tooltip>
              <Tooltip title="React" position="top" trigger="mouseenter">
                <div>
                  <SiReact />
                </div>
              </Tooltip>
              <Tooltip title="Bootstrap" position="top" trigger="mouseenter">
                <div>
                  <SiBootstrap />
                </div>
              </Tooltip>
              <Tooltip title="Git" position="top" trigger="mouseenter">
                <div>
                  <SiGit />
                </div>
              </Tooltip>
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
              <Tooltip title="HTML5" position="top" trigger="mouseenter">
                <div>
                  <SiHtml5 />
                </div>
              </Tooltip>
              <Tooltip title="CSS" position="top" trigger="mouseenter">
                <div>
                  <SiCss3 />
                </div>
              </Tooltip>
              <Tooltip title="Javascript" position="top" trigger="mouseenter">
                <div>
                  <SiJavascript />
                </div>
              </Tooltip>
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
