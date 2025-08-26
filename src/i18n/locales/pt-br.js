export default {
  translations: {
    home: {
      nameis: "ME CHAMO",
      name: "MURILO BARBOSA",
      developer: "SOU UM DESENVOLVEDOR BACKEND",
    },
    about: {
      title: "Sobre mim",
      hello: "Hello world!",
      text: "Sou um desenvolvedor backend com experiência em Java, Spring Boot, PostgreSQL, RabbitMQ e Kafka, além de conhecimentos em AWS, Docker e microsserviços. Também tenho vivência com JavaScript, PHP, Laravel e React, o que me permite compreender o ecossistema full stack quando necessário. Concluí a graduação em Análise e Desenvolvimento de Sistemas na Universidade São Francisco e atualmente trabalho na Sentry, uma plataforma SaaS de Gestão de Segurança Pública, onde continuo aprimorando minhas habilidades técnicas. Se quiser conhecer meus projetos ou discutir possíveis colaborações, será um prazer conversar!",
      resume: "Currículo",
    },
    skills: {
      title: "HABILIDADES",
      mousePlacement: "*Coloque o mouse em cima para saber mais sobre*",
      Java: "Utilizado diariamente no meu emprego atual e em projetos pessoais. Desenvolvi uma aplicação de gestão (Xaus) usando Java, integrando APIs RESTful e realizando otimizações de desempenho.",
      SpringBoot:
        "Utilizado para expor APIs internas e externas, quase diariamente no meu trabalho e em projetos pessoais. Onde atualmente estou desenvolvendo um E-commerce orientado a eventos utilizando Spring boot",
      SpringSecurity:
        "Implementado em projetos pessoais e manutenções no trabalho atual para garantir a segurança das aplicações. Configurei autenticação baseada em JWT e autorização básica.",
      PostgreSQL:
        "Utilizado no trabalho atual e em projetos pessoais. Otimizei consultas, modelei tabelas e criei índices para melhorar o desempenho do banco de dados. Onde também participei de uma migração de banco de dados, de SQL para Postgresql",
      JavaScript:
        "Tenho experiência com JavaScript tanto profissionalmente quanto em projetos pessoais. Você pode consultar mais detalhes sobre os projetos realizados abaixo.",
      React:
        "Utilizado em diversos projetos pessoais.  Tenho aproximadamente 6 meses de experiência profissionalmente e outros frameworks JavaScript permitindo criar interfaces totalmente interativas.",
      RabbitMQ:
        "Usado para gerenciar notificações na minha aplicação de gestão completa (Xaus). Podendo com que as mensagen sejma entregues em sistemas distribuídos.",
      Kafka:
        "Utilizado para criar uma arquitetura orientada a eventos durante o desenvolvimento (ainda em andamento). Assim fazendo com que a aplicação trabalhe totalmente de forma assíncrona.",
      Docker: "Utilizado para criar ambientes isolados e padronizados, facilitando o desenvolvimento, testes e deploy das aplicações.",
      Git: "Utilizado diariamente em meu trabalho e em meus projetos pessoais. Tenho uma grande experiência com o git e controle de versão.",
      Bootstrap:
        "Utilizado em projetos pessoais e com breve experiência profissional. Competente em criar layouts responsivos e componentes reutilizáveis.",
      Sass: "Utilizado em projetos pessoais, incluindo este portfólio. Experiência em escrever CSS mais eficiente e organizado utilizando Sass.",
      PHP: "Tenho aproximadamente 6 meses de experiência profissionalmente utilizando PHP juntamente com o Laravel para criar aplicações web robustas e eficientes.",
      Laravel:
        "Tenho aproximadamente 6 meses de experiência profissionalmente, trabalhei com Laravel para criar telas, realizar consultas no banco de dados.",
      Tailwind:
        "Utilizado em projetos pessoais como no meu aplicação de gestão (Xaus).",
    },
    projects: {
      title: "PROJETOS",
      subtitle: "Tecnologias usadas",
      demo: "Demonstração",
      frontend: "FrontEnd",
      backend: "BackEnd",
      repository: "Repositório",
      eCommerce:{
        title: "E-Commerce",
        description: "Um e-commerce desenvolvido utilizando microserviços em Java Spring Boot, seguindo uma arquitetura orientada a eventos para assegurar a comunicação entre eles. A comunicação é realizada via Apache Kafka, enquanto o Confluent Schema Registry garante a consistência e compatibilidade dos dados entre os serviços. Em cada microserviço, está implementado o padrão CQRS com o Axon Server, tornando o sistema altamente escalável e preparado para crescer com eficiência."
      },
      xaus: {
        title: "Xaus",
        description:
          "O XAUS é um projeto full stack que fornece um painel intuitivo baseado em admin panel para gerenciar todos os aspectos cruciais de um negócio, desde a criação de pedidos até a administração de usuários e permissões. Ele é construído com foco na segurança, escalabilidade e facilidade de manutenção.",
      },
      dreamStay: {
        title: "Dream stay",
        description:
          "O DreamStay é um website de viagens desenvolvido com a tecnologia Next.js e conectado a um banco de dados Supabase que utiliza PostgreSQL. Aqui, você pode comprar pacotes de viagem prontos, pesquisar por destinos e até mesmo criar a sua própria viagem de maneira simples e descomplicada.",
      },
      taskMaster: {
        title: "Task master",
        description:
          "Aproveite uma lista de tarefas completa desenvolvida com React, que permite organizar suas atividades de forma fácil e prática através de uma conta integrada ao Firebase. Com esta aplicação, você terá a flexibilidade de classificar suas tarefas por data, ordem alfabética, status de conclusão, proporcionando uma organização ainda mais eficiente.",
      },
      worldMovies: {
        title: "World movies",
        description:
          "O World Movies é um site construído utilizando a API do TMDB, onde você pode criar sua lista de filmes para assistir, buscar por filmes e conferir as últimas estreias. Com um design moderno e uma interface fácil de usar, o World Movies oferece uma experiência de navegação sem complicações para os amantes de cinema e entusiastas de filmes.",
      },
      weatherApp: {
        title: "Weather app",
        description:
          "O Weather App combina a precisão da API Open Weather com o design neuromórfico. Tenha informações meteorológicas atualizadas em um site com uma interface envolvente e estética tátil. Obtenha previsões, temperatura, umidade e mais em um formato fácil de ler.",
      },
    },
    contact: {
      title: "ENTRE EM CONTATO",
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      send: "ENVIAR",
    },
    footer: {
      developedBy: "Desenvolvido por Murilo Barbosa",
    },
  },
};
