import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    QNAR,
    SMIT,
    QAMSOFT,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "cv",
      title: "CV",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "WordPress Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "WordPress Developer",
      company_name: "QNAR International",
      icon: QNAR,
      iconBg: "#FFFF",
      date: "June 2022 - September 2022",
      points: [
        "Implemented a Notion-based ticketing system and created a tiered support system, reducing the average time to resolve technical issues from 2 days to 1 day and improving customer satisfaction.",
        "Collaborated closely with clients to develop and maintain custom WordPress websites and applications, resulting in a 95% client satisfaction rate.",
        "Executed performance optimization and debugging on existing WordPress websites and applications, resulting in a 40% improvement in website speed and performance.",
      ],
    },
    {
      title: "MERN Web Instructor",
      company_name: "Saylani Mass IT Training",
      icon: SMIT,
      iconBg: "#FFFF",
      date: "May 2022 – March 2023",
      points: [
        "Develop and deliver lesson plans to 100+ students, resulting in a 90% course completion rate and a 75% job placement rate among graduates.",
        "Showcase mastery of a wide range of web development technologies, including HTML5, CSS, Bootstrap, React.js, Firebase, MongoDB, GitHub, Node.js, and ECMAScript, resulting in a 90% student satisfaction rate and an 80% course completion rate.",
        "Adapt to emerging web development technologies and trends through continuous learning and collaboration, resulting in a 30% improvement in student satisfaction with course content over 2 years.",
        "Contribute to the growth of the web development industry by preparing students for careers and fostering a community of learners, resulting in a 20% increase in enrollment in the course over 1 year",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "QAMSoft Technologies",
      icon: QAMSOFT,
      iconBg: "#FFFF",
      date: "March 2023 – Aug 2023",
      points: [
        "Involved in developing a robust and user-friendly Learning Management System (LMS) platform.",
        "Responsible for front-end and back-end development tasks using technologies such as AngularJS, ASP.NET Web API, .NET Framework, C#, HTML, CSS, Bootstrap, Tailwind CSS, GitHub, Node.js, and HTML.",
        "Collaborated with experienced software engineers, participating in code reviews, and demonstrating effective communication and teamwork.",
        "Applying principles of object-oriented programming (OOP) and layered architecture for scalable and maintainable code.",
        "Continuously improving full-stack development skills and contributing to the success of the LMS project.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but UMAIR proved me wrong.",
      name: "Moosa Raza",
      designation: "Owner",
      company: "The Brand Shop",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like UMAIR does.",
      name: "MR Shoaib",
      designation: "Owner",
      company: "Muslim Quran Lessons",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After UMAIR optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };