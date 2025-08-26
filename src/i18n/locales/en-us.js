export default {
  translations: {
    home: {
      nameis: "MY NAME IS",
      name: "MURILO BARBOSA",
      developer: "I AM A BACKEND DEVELOPER",
    },
    about: {
      title: "About Me",
      hello: "Hello world!",
      text: "I’m a backend developer with experience in Java, Spring Boot, PostgreSQL, RabbitMQ, and Kafka, as well as knowledge of AWS, Docker, and microservices. I also have background in JavaScript, PHP, Laravel, and React, which allows me to understand the full stack when needed. I graduated in Systems Analysis and Development at Universidade São Francisco and currently work at Sentry, a SaaS platform for Public Safety Management, where I’m constantly improving my technical skills. If you’d like to check out my projects or discuss collaboration opportunities, feel free to reach out!",
      resume: "Resume",
    },
    skills: {
      title: "SKILLS",
      mousePlacement: "*Hover to learn more*",
      Java: "Used daily in my current job and personal projects. I developed a management application (Xaus) using Java, integrating RESTful APIs, and performing performance optimizations.",
      SpringBoot:
        "Used to expose internal and external APIs, almost daily in my work and personal projects. I am currently developing an event-driven e-commerce application using Spring Boot.",
      SpringSecurity:
        "Implemented in personal projects and maintenance tasks at my current job to ensure application security. I configured JWT-based authentication and basic authorization.",
      PostgreSQL:
        "Used in my current job and personal projects. I optimized queries, modeled tables, and created indexes to improve database performance. I also participated in a database migration from SQL to PostgreSQL.",
      JavaScript:
        "I have experience with JavaScript both professionally and in personal projects. You can find more details about the projects I've completed below.",
      React:
        "Used in various personal projects. I have approximately six months of professional experience with React and other JavaScript frameworks, allowing me to create fully interactive interfaces.",
      RabbitMQ:
        "Used to manage notifications in my comprehensive management application (Xaus), ensuring that messages are delivered in distributed systems.",
      Kafka:
        "Used to create an event-driven architecture during development (still in progress), enabling the application to work completely asynchronously.",
      Docker: "Used to create isolated and standardized environments, making development, testing, and deployment of applications easier.",
      Git: "Used daily in my job and personal projects. I have extensive experience with Git and version control.",
      Bootstrap:
        "Used in personal projects with brief professional experience. Competent in creating responsive layouts and reusable components.",
      Sass: "Used in personal projects, including this portfolio. Experience in writing more efficient and organized CSS using Sass.",
      PHP: "I have approximately six months of professional experience using PHP along with Laravel to create robust and efficient web applications.",
      Laravel:
        "I have approximately six months of professional experience, working with Laravel to create screens and perform database queries.",
      Tailwind:
        "Used in personal projects like my management application (Xaus).",
    },
    projects: {
      title: "PROJECTS",
      subtitle: "Technologies Used",
      demo: "Demonstration",
      frontend: "FrontEnd",
      backend: "BackEnd",
      repository: "Repository",
      eCommerce:{
        title: "E-Commerce",
        description: "An E-commerce platform is built with microservices in Java Spring Boot, using an event-driven architecture to keep everything in sync smoothly. With Apache Kafka managing the message flow and Confluent Schema Registry ensuring data consistency and compatibility, communication between services is reliable and robust. Each microservice is set up with the CQRS (Command Query Responsibility Segregation) pattern, using Axon Server to handle commands and queries separately. This design makes the system highly scalable and ready to grow, supporting high demand and large transaction volumes with ease."
      },
      xaus: {
        title: "Xaus",
        description:
          "XAUS is a full stack project that provides an intuitive admin panel to manage all crucial aspects of a business, from order creation to user and permission management. It is built with a focus on security, scalability, and maintainability.",
      },
      dreamStay: {
        title: "Dream stay",
        description:
          "DreamStay is a travel website developed with Next.js technology and connected to a Supabase database that uses PostgreSQL. Here, you can buy ready-made travel packages, search for destinations, and even create your own trip easily and simply.",
      },
      taskMaster: {
        title: "Task master",
        description:
          "Enjoy a complete task list developed with React, allowing you to organize your activities easily and conveniently through an account integrated with Firebase. With this application, you will have the flexibility to sort your tasks by date, alphabetical order, completion status, providing even more efficient organization.",
      },
      worldMovies: {
        title: "World movies",
        description:
          "World Movies is a site built using the TMDB API, where you can create your movie watchlist, search for movies, and check the latest releases. With a modern design and an easy-to-use interface, World Movies offers a hassle-free browsing experience for movie lovers and enthusiasts.",
      },
      weatherApp: {
        title: "Weather app",
        description:
          "The Weather App combines the accuracy of the Open Weather API with a neuromorphic design. Get updated weather information on a site with an engaging interface and tactile aesthetics. Get forecasts, temperature, humidity, and more in an easy-to-read format.",
      },
    },
    contact: {
      title: "GET IN TOUCH",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "SEND",
    },
    footer: {
      developedBy: "Developed by Murilo Barbosa",
    },
  },
};
