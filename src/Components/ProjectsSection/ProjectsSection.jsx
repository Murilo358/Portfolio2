import WorldMovies from "../../assets/WorldMovies.png";
import TaskMaster from "../../assets/TaskMaster.png";
import Weather from "../../assets/Weather.png";
import Dream from "../../assets/Dream-stay.png";

import "./ProjectsSection.scss";
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
} from "react-icons/si";

const ProjectsSection = () => {
  return (
    <div className="section  projects-section-container">
      <h1 className="projects-section-container__h1">PROJETOS</h1>
      <div className="projects-section-content">
        <div className="projects-section-content-project">
          <img
            className="projects-section-content-project__image"
            src={WorldMovies}
            alt=""
          />
          <div
            className="projects-section-content-project__description "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1>World movies</h1>
            <h4>Técnologias usadas</h4>
            <div className="projects-section-content-project__description-icons ">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiReact />
              <SiBootstrap />
              <SiGit />
            </div>
            <p>
              {" "}
              O World Movies é um site construído utilizando a API do TMDB, onde
              você pode criar sua lista de filmes para assistir, buscar por
              filmes e conferir as últimas estreias. Com um design moderno e uma
              interface fácil de usar, o World Movies oferece uma experiência de
              navegação sem complicações para os amantes de cinema e entusiastas
              de filmes.
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
        </div>

        <div className="projects-section-content-project">
          <div
            className="projects-section-content-project__description "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1>Task master</h1>
            <h4>Técnologias usadas</h4>
            <div className="projects-section-content-project__description-icons">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiReact />
              <SiFirebase />

              <SiGit className="projects-section-content-project__description-icon" />
            </div>
            <p>
              {" "}
              Aproveite uma lista de tarefas completa desenvolvida com React,
              que permite organizar suas atividades de forma fácil e prática
              através de uma conta integrada ao Firebase. Com esta aplicação,
              você terá a flexibilidade de classificar suas tarefas por data,
              ordem alfabética, status de conclusão, proporcionando uma
              organização ainda mais eficiente.
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                href="https://todolist-murilo358.vercel.app/"
                target="_blank"
              >
                <button>Demo</button>
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
          <img
            className="projects-section-content-project__image"
            src={TaskMaster}
            alt=""
          />
        </div>

        <div className="projects-section-content-project">
          <img
            className="projects-section-content-project__image"
            src={Dream}
            alt=""
          />
          <div
            className="projects-section-content-project__description "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1>Dream stay</h1>
            <h4>Técnologias usadas</h4>
            <div className="projects-section-content-project__description-icons">
              <SiHtml5 />
              <SiCss3 />
              <SiReact />
              <SiTypescript />
              <SiTailwindcss />
              <SiPrisma />
              <SiSupabase />
              <SiNextdotjs />
              <SiGit className="projects-section-content-project__description-icon" />
            </div>
            <p>
              O DreamStay é um website de viagens desenvolvido com a tecnologia
              Next.js e conectado a um banco de dados Supabase que utiliza
              PostgreSQL. Aqui, você pode comprar pacotes de viagem prontos,
              pesquisar por destinos e até mesmo criar a sua própria viagem de
              maneira simples e descomplicada.
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                href="https://dream-stay.vercel.app"
                target="_blank"
              >
                <button>Demo</button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/Murilo358/DreamStay"
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
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1>Weather app</h1>
            <h4>Técnologias usadas</h4>
            <div className="projects-section-content-project__description-icons ">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </div>
            <p>
              {" "}
              O Weather App combina a precisão da API Open Weather com o design
              neuromórfico. Tenha informações meteorológicas atualizadas em um
              site com uma interface envolvente e estética tátil. Obtenha
              previsões, temperatura, umidade e mais em um formato fácil de ler
              .
            </p>
            <div className="projects-section-content-project__description-buttons">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://murilo358.github.io/Weather/"
              >
                <button>Demo</button>
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
          <img
            className="projects-section-content-project__image"
            src={Weather}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
