import type { Experience, TranslatedContent } from "@/types";

interface ExperienceContent {
  title: string;
  jobs: Experience[];
}

export const experienceContent: TranslatedContent<ExperienceContent> = {
  en: {
    title: "Work Experience",
    jobs: [
      {
        title: "Backend Software Engineer - Data Supply Chain",
        company: "Univers (QoS Energy)",
        location: "Nantes, France",
        period: "November 2023 - Present",
        description:
          "Develop and maintain Qantum, a comprehensive SaaS platform for monitoring renewable energy power plants. Lead the design of communication interfaces, optimize data processing pipelines, and implement observability solutions. Collaborate with cross-functional teams to deliver scalable features and provide technical expertise for production support.",
        skills:
          "Go, Ruby on Rails, Python, RabbitMQ, Azure Blob Storage, Docker, Kubernetes, GitOps, Prometheus, OpenTelemetry, Opensearch, REST APIs, Microservices",
      },
      {
        title: "Software Engineer",
        company: "EXFO",
        location: "Saint-Jacques-de-la-Lande, France",
        period: "October 2021 - October 2023",
        description:
          "Developed and optimized high-performance backend services for the SensAI AI-driven network analytics platform. Built scalable data processing pipelines using Go and Python, integrated Kafka streaming for real-time event processing, and contributed to the Adaptive Service Assurance (ASA) Platform. Implemented monitoring solutions and automated deployment workflows.",
        skills:
          "Go, Python, Kafka, Docker, Kubernetes, AWS, Microservices, CI/CD, Monitoring",
      },
      {
        title: "Backend Developer",
        company: "Resalocal",
        location: "Talloires-Montmin, France",
        period: "May 2021 - July 2021",
        description:
          "Designed and implemented API integration with Apidae Tourism Information System. Developed synchronization mechanisms between Smartmap application and SIT Apidae, ensuring data consistency and real-time updates. Created comprehensive technical documentation and collaborated with stakeholders to define integration requirements.",
        skills:
          "PHP, REST APIs, Confluence, Jira, Kubernetes, Cloudinary, API Integration",
      },
      {
        title: "Freelance Full-Stack Developer",
        company: "Self-Employed",
        location: "Côte d'Ivoire (Remote)",
        period: "January 2019 - December 2020",
        description:
          "Delivered end-to-end web solutions for diverse clients including e-commerce platforms, business management systems, and custom web applications. Designed RESTful APIs, implemented secure authentication systems, and integrated third-party services. Managed full project lifecycle from requirements gathering to deployment and maintenance.",
        skills:
          "Laravel, Spring Boot, Java, PHP, MySQL, REST APIs, Git, Web Development",
      },
      {
        title: "Software Developer Intern",
        company: "OK-SERVICE",
        location: "Bouaké, Côte d'Ivoire",
        period: "June 2019 - December 2019",
        description:
          "Designed and developed a comprehensive inventory and sales management system for a multi-service retail company. Conducted requirements analysis, created database schema, and built a full-stack web application using Laravel and Vue.js. Implemented features for stock tracking, sales reporting, and invoice generation. Successfully deployed the application to Firebase, reducing manual processing time by 60%.",
        skills:
          "Laravel, Vue.js, MySQL, Bootstrap, Firebase, Full-Stack Development",
      },
      {
        title: "Web Developer",
        company: "ABOUAKE.NET · Internship",
        location: "Bouaké, Vallée du Bandama, Côte d'Ivoire",
        period: "June 2018 to August 2018 · 3 months",
        description:
          "2nd year school internship: Development of a web application for laundry management.",
        skills: "AngularJS, Bootstrap3, PHP, Software Development, Databases",
      },
    ],
  },
  fr: {
    title: "Expériences professionnelles",
    jobs: [
      {
        title: "Ingénieur Logiciel Backend - Data Supply Chain",
        company: "Univers (QoS Energy)",
        location: "Nantes, France",
        period: "Novembre 2023 - Présent",
        description:
          "Développement et maintenance de Qantum, une plateforme SaaS complète pour le monitoring des centrales d'énergie renouvelable. Direction de la conception des interfaces de communication, optimisation des pipelines de traitement de données, et mise en œuvre de solutions d'observabilité. Collaboration avec des équipes pluridisciplinaires pour livrer des fonctionnalités évolutives et fournir une expertise technique pour le support production.",
        skills:
          "Go, Ruby on Rails, Python, RabbitMQ, Azure Blob Storage, Docker, Kubernetes, GitOps, Prometheus, OpenTelemetry, Opensearch, APIs REST, Microservices",
      },
      {
        title: "Ingénieur Logiciel",
        company: "EXFO",
        location: "Saint-Jacques-de-la-Lande, France",
        period: "Octobre 2021 - Octobre 2023",
        description:
          "Développement et optimisation de services backend haute performance pour la plateforme d'analytique réseau pilotée par IA SensAI. Construction de pipelines de traitement de données évolutifs en Go et Python, intégration du streaming Kafka pour le traitement d'événements en temps réel, et contribution à la plateforme Adaptive Service Assurance (ASA). Mise en œuvre de solutions de monitoring et automatisation des workflows de déploiement.",
        skills:
          "Go, Python, Kafka, Docker, Kubernetes, AWS, Microservices, CI/CD, Monitoring",
      },
      {
        title: "Développeur Backend",
        company: "Resalocal",
        location: "Talloires-Montmin, France",
        period: "Mai 2021 - Juillet 2021",
        description:
          "Conception et implémentation de l'intégration API avec le Système d'Information Touristique Apidae. Développement de mécanismes de synchronisation entre l'application Smartmap et le SIT Apidae, assurant la cohérence des données et les mises à jour en temps réel. Création de documentation technique complète et collaboration avec les parties prenantes pour définir les exigences d'intégration.",
        skills:
          "PHP, APIs REST, Confluence, Jira, Kubernetes, Cloudinary, Intégration API",
      },
      {
        title: "Développeur Full-Stack Freelance",
        company: "Indépendant",
        location: "Côte d'Ivoire (à distance)",
        period: "Janvier 2019 - Décembre 2020",
        description:
          "Livraison de solutions web complètes pour divers clients incluant des plateformes e-commerce, des systèmes de gestion d'entreprise et des applications web personnalisées. Conception d'APIs RESTful, implémentation de systèmes d'authentification sécurisés, et intégration de services tiers. Gestion du cycle de vie complet du projet, de la collecte des exigences au déploiement et à la maintenance.",
        skills:
          "Laravel, Spring Boot, Java, PHP, MySQL, APIs REST, Git, Développement Web",
      },
      {
        title: "Développeur Logiciel Stagiaire",
        company: "OK-SERVICE",
        location: "Bouaké, Côte d'Ivoire",
        period: "Juin 2019 - Décembre 2019",
        description:
          "Conception et développement d'un système complet de gestion des stocks et des ventes pour une entreprise de vente au détail multiservices. Réalisation de l'analyse des besoins, création du schéma de base de données, et construction d'une application web full-stack avec Laravel et Vue.js. Implémentation de fonctionnalités pour le suivi des stocks, les rapports de ventes et la génération de factures. Déploiement réussi de l'application sur Firebase, réduisant le temps de traitement manuel de 60%.",
        skills:
          "Laravel, Vue.js, MySQL, Bootstrap, Firebase, Développement Full-Stack",
      },
      {
        title: "Développeur Web Stagiaire",
        company: "ABOUAKE.NET",
        location: "Bouaké, Côte d'Ivoire",
        period: "Juin 2018 - Août 2018",
        description:
          "Stage de 2e année : Développement d'une application web de gestion de pressing avec système de suivi des commandes, gestion clientèle et facturation.",
        skills: "AngularJS, Bootstrap, PHP, MySQL, Développement Web",
      },
    ],
  },
};
