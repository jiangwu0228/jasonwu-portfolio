import { Description } from "@material-ui/icons";

export const skillCategory = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "demos",
    title: "Demos",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Peter Yu",
    title: "Junior Developer",
    url: "https://www.linkedin.com/in/jia-yu-8398861a3",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQED1A10xVDNdQ/profile-displayphoto-shrink_800_800/0/1592102051126?e=1650499200&v=beta&t=97yX4zU4ahLmrfwl-onvtoECR_22Uz1U_L8pC765TOE",
    icon: "assets/linkedin.png",
    desc: "He is punctual, hardworking, helpful and show initiative by seeking out solutions to problems. He is a good team player and always ready to learn new things and also respectful of other colleagues.",
  },
  {
    id: 2,
    name: "Alex Zheng",
    title: "Senior Web Developer",
    url: "https://www.linkedin.com/in/alex10168",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQGksyXVdo4E0w/profile-displayphoto-shrink_800_800/0/1517495950332?e=1650499200&v=beta&t=rq9uxtPHrwEQ7ew8stOB9dvsx44Rm9DOGDHL511ADtE",
    icon: "assets/linkedin.png",
    desc: " organized, thoughtful person who works well under pressure. He is a very hardworking programmer who is passionate about learning new skills and takes every job seriously.",
    featured: true,
  },
  {
    id: 3,
    name: "Well Lin",
    title: "Senior Software Engineer",
    url: "https://www.linkedin.com/in/welllin",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQE5PDtioprCzQ/profile-displayphoto-shrink_800_800/0/1517066053897?e=1650499200&v=beta&t=-LCxsa-2A_a9R5IN2DRQgJcOiRPaJlwXUahP_FUD7aE",
    icon: "assets/linkedin.png",
    desc: "He is usually the one to stay calm and think through a problem logically, even if things are a bit stressful.",
  },
];

export const portFolioData = [
  {
    id: "facepainting",
    title: "Face Painting Website",
    shortDesc: "This is a face painting website built with React",
    situation:
      "There is a small business that needs a website for display and gets in touch for booking. The prototype is in process in Figma and has already bought a domain for the website.",
    task: "There won't be a lot of data in the backend, so I can set all the data as static data. By EmailJS, customers can send messages directly to the staff email through a form on the page. Also, they need a dark theme as well. I will host this website in Vercel. ",
    action: [
      "UI and prototype design in Figma.",
      "Data hosting in third party websites and start to build with React.",
    ],
    result: "Experience in the project from scratch and it’s still in process.",
    img: "https://i.ibb.co/GvL7Qfd/auth.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: " ",
    tag: "Works",
    tech: [
      "React",
      "Scss",
      "Material-UI",
      "react hooks",
      "react context",
      "npm",
    ],
  },
  {
    id: "gotime",
    title: "Go Time",
    shortDesc: "This is a clocking app built with Angular",
    situation:
      "The project is an application of clocking in and calculating working hours for employees. All web applications build with C# and angular. We use Bitbucket and Jira as project management.",
    task: "This project needs an entry home page and some new features from Kanban Board.",
    action: [
      "I build a home page with material design.",
      "New features build-in project Kanban such as sort, search in table etc.",
    ],
    result:
      "Experience in single page builds and adding some new features in Angular projects.",
    img: "https://i.ibb.co/GvL7Qfd/auth.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://www.jasonwu.me",
    tag: "Works",
    tech: [
      "React",
      "Scss",
      "Material-UI",
      "react hooks",
      "react context",
      "npm",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDesc: "This is a E-commerce app built with Vue.",
    situation:
      "The project is a Mini Program in WeChat but needed some web page as an introduction. ",
    task: "Use HTML, CSS and bootstrap to build a single page web app and manage product data.",
    action: [
      "I build a home page for projects with bootstrap.",
      "Manage backend product data as an administrator.",
    ],
    result: "Experience in HTML and CSS in responsive single page sites.",
    img: "https://i.ibb.co/GvL7Qfd/auth.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://www.jasonwu.me",
    tag: "Works",
    tech: [
      "React",
      "Scss",
      "Material-UI",
      "react hooks",
      "react context",
      "npm",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDesc: "This is a portfolio website built with React",
    situation:
      "I need a website to show all of my projects, work and services.",
    task: "Build a single page responsive website with React and deploy it in my domain.",
    action: [
      "Build with SCSS implement both dark and light theme with react context hook. ",
      "Animation building with SCSS instead uses lots of libraries. ",
      "Mobil phone friendly page built with SCSS for different screen sizes. ",
      "Some of the components build with Material UI. ",
      "Deploy in Vercel and use CloudFare for DNS in my domain. ",
    ],
    result:
      "Experience in React framework, knowledge with material UI with SCSS. Future build with most JavaScript and fewer libraries.Now the project is in GitHub, hosted by Vercel and parked in https://www.jasonwu.me/.",
    img: "https://i.ibb.co/GvL7Qfd/auth.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://www.jasonwu.me",
    tag: "Projects",
    tech: [
      "React",
      "Scss",
      "Material-UI",
      "react hooks",
      "react context",
      "npm",
    ],
  },
  {
    id: "cms",
    title: "CMS",
    shortDesc: "This is a School CMS website built with NextJS",
    situation:
      "This project is for school management including different roles in school, building with Next.js, Ant Design and provided API. ",
    task: "Dynamic module for different roles, search and sort in the dashboard, CRUD needed.",
    action: [
      "Modular menu created for different roles, and this is easy to implement with the new model. ",
      "Data visualisation in the dashboard using HighchartsJS. ",
      "Search and sort for data table with Ant Design components. ",
      "CRUD using Axios fetch data from RESTful API.",
    ],
    result:
      "Experience in whole dashboard building with framework Next.js with JavaScript, Ant Design, REST API, and also some libraries such as HighchartsJS, Axios, CryptoJS, Lodash etc. ",
    img: "https://i.ibb.co/fH0cQ6W/honkai.png",
    icon: "https://i.ibb.co/YLnvyMT/nextjs.png",
    url: "https://wu-cms.vercel.app/",
    tag: "Projects",
    tech: [
      "NextJS",
      "Ant Design",
      "axios",
      "cryptojs",
      "Highcharts",
      "lodash",
      "styled-components",
      "npm",
    ],
  },
  {
    id: "crogle",
    title: "Crogle",
    shortDesc: "This is a copy of google search website",
    situation: "I'm using google search API to build my search engine.",
    task: "Build a responsive website with React and deploy it in my domain. Build with Tailwind CSS and React context hook for both theme change and data across different components.",
    action: [
      "Fetch data using Axios from RESTful API and save it in react Context hook.",
      "Using debounce searching in the search bar.",
      "Using Tailwind CSS to set a dark theme.",
      "Deploy in Vercel and use CloudFare for DNS in my domain.",
    ],
    result:
      "Experience in React framework, knowledge with debounce and Tailwind CSS. Now the project is in GitHub, hosted by Vercel and parked in https://corgle.jasonwu.me/.",
    img: "https://i.ibb.co/8D7LVr4/cryoto.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://corgle.jasonwu.me/",
    tag: "Projects",
    tech: ["react", "Tailwind css", "Rapid API", "react context", "npm"],
  },
  {
    id: "realestate",
    title: "Real Estate",
    shortDesc: "This is a real estate website built with React",
    situation:
      "I'm finding a real estate API implementing the data of both renting and selling.",
    task: "Build a responsive website with NextJS and deploy it in my domain. Filter result with multiple conditions.",
    action: [
      "Components built with Chakra UI and fully responsive.",
      "Filter result by selecting different conditions, then get data using Axios from RESTful API.",
      "Deploy in Vercel and use CloudFare for DNS in my domain.",
    ],
    result:
      "Experience in React framework, knowledge with Chakra UI and retrieving data from RESTful API. Now the project is in GitHub, hosted by Vercel and parked in https://reslestate.jasonwu.me/.",
    img: "https://i.ibb.co/cgcLwXv/realestate.png",
    icon: "https://i.ibb.co/YLnvyMT/nextjs.png",
    url: "https://reslestate.jasonwu.me/",
    tag: "Projects",
    tech: ["NextJS", "Charkra-UI", "millify", "axios", "Rapid API", "npm"],
  },
  {
    id: "crypto",
    title: "Crypto",
    shortDesc: "This is a crypto website build with React",
    situation:
      "I'm interested in cryptos currency and related news and keen to pursue this area and create a website to show all information in my domain.",
    task: "Build a responsive website with React and deploy it in my domain. Search and show different coin currencies and some related pieces of information.",
    action: [
      "Search data using Axios from RESTful API and save it via redux.",
      "Using ChartJS display data in crypto detail page.",
      "Components built with UI library Ant Design and fully responsive.",
      "The menu bar is abstracted into a single file for easy configuration to add new features in the future.",
      "Deploy in Vercel and use CloudFare for DNS in my domain.",
    ],
    result:
      "Experience in React framework, knowledge with Redux and ChartJS, and also its easy extended new feature in the future. Now the project is in GitHub, hosted by Vercel and parked in https://crypto.jasonwu.me/.",
    img: "https://i.ibb.co/8D7LVr4/cryoto.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://crypto.jasonwu.me/",
    tag: "Projects",
    tech: [
      "React",
      "Ant Design",
      "Redux",
      "Chart.js",
      "Rapid API",
      "axios",
      "millify",
      "moment",
      "npm",
    ],
  },
  {
    id: "travel",
    title: "Travel Advisor",
    shortDesc: "This is a travel advisor website with Google Maps API",
    situation:
      "My future is in using Google Maps API showing all restaurants, hotels, and other attractions as well as the weather.",
    task: "Build a website information list in both maps and the left bar.",
    action: [
      "Components built with Material UI with React.",
      "List and filter data in the left bar and match it in the map that allows you to click on the card in the map and then auto-scroll to the one you choose showing details.",
      "Deploy in Vercel and use CloudFare for DNS in my domain.",
    ],
    result:
      "Experience in Google Map API, knowledge with interact with map components. Now the project is in GitHub, hosted by Vercel and parked in https://travel-advisor.jasonwu.me/.",
    img: "https://i.ibb.co/0947dTQ/map.png",
    icon: "https://i.ibb.co/YLnvyMT/nextjs.png",
    url: "https://travel-advisor.jasonwu.me/",
    tag: "Projects",
    tech: ["React", "material-ui", "google map api", "npm", "axios", "lodash"],
  },
  {
    id: "restaurant",
    title: "Restaurant cart",
    shortDesc: "This is a React learning demo",
    situation:
      "I was learning React and wanted to create a restaurant cart website to practice the project.",
    task: "Build a website to practice React hooks, components and so on.",
    action: [
      "Almost build every element as component.",
      "Using hooks to manage state and use effect to fetch data.",
      "Practice the data flow between different components.",
    ],
    result:
      "Knowledge with React components, how to passing data between components, how to manage state with React hooks. Now the project is in GitHub, hosted by Vercel and parked in https://food-cart.jiangwu.me/.",
    img: "https://i.ibb.co/MCG9nhk/resturant.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://food-cart.jiangwu.me/",
    tag: "Demos",
    tech: ["React", "Ant Design", "react-context", "npm"],
  },
  {
    id: "honkai",
    title: "Honkai Impact demo",
    shortDesc: "This is a NextJS learning project demo",
    situation:
      "My future is build a website practicing NextJS with server side rendering with mongoDB.",
    task: "Build a website with NextJS router and rendering data in server side.",
    action: [
      "Fetch data in server side from mongoDB.",
      "Use NextJS router to render different pages.",
      "Deploy in Vercel and use CloudFare for DNS in my domain.",
    ],
    result:
      "Experience in NextJS and mongoDB. Now the project is in GitHub, hosted by Vercel and parked in https://honkai.jiangwu.me/.",
    img: "https://i.ibb.co/fH0cQ6W/honkai.png",
    icon: "https://i.ibb.co/YLnvyMT/nextjs.png",
    url: "https://honkai.jiangwu.me/",
    tag: "Demos",
    tech: ["NextJS", "mongodb", "npm"],
  },
  {
    id: "auth",
    title: "Firebase auth demo with React",
    shortDesc: "This is a React and Firebase Learning demo",
    situation:
      "I was learning React adn Firebase and wanted to create a demo to practice the project.",
    task: "Build a website use React hooks and save user data also authentication in Firebase.",
    action: [
      "Build components with React hooks.",
      "Save data in Firebase in realtime database.",
      "Authentication and manage users in Firebase.",
    ],
    result:
      "Experience in Google Firebase, knowledge with React components and hooks. Now the project is in GitHub, hosted by Vercel and parked in https://auth-demo.jiangwu.me/.",
    img: "https://i.ibb.co/GvL7Qfd/auth.png",
    icon: "https://i.ibb.co/HdjCd9w/sass.png",
    url: "https://auth-demo.jiangwu.me/",
    tag: "Demos",
    tech: ["React", "Firebase", "react-context", "npm"],
  },
];

export const skills = [
  "https://i.ibb.co/sJ7fxv2/html.png",
  "https://i.ibb.co/ZcVc2cW/css-3.png",
  "https://i.ibb.co/BfsbD88/js.png",
  "https://i.ibb.co/M70R2Nm/typescript.png",
  "https://i.ibb.co/HdjCd9w/sass.png",
  "https://i.ibb.co/s3BZS0z/tailwindcss.png",
  "https://i.ibb.co/rft20TC/react.png",
  "https://i.ibb.co/YLnvyMT/nextjs.png",
  "https://i.ibb.co/8g02fQ0/angular.png",
];

export const skillsImg = [
  // {name:'NodeJS', img: 'https://i.ibb.co/s3BZS0z/tailwindcss.png'},
  // {name:'Express', img: 'https://i.ibb.co/sJ7fxv2/html.png'},
  // {name:'MongoDB', img: 'https://i.ibb.co/ZcVc2cW/css-3.png'},
  // {name:'Firebase', img: 'https://i.ibb.co/BfsbD88/js.png'},
  
  {name:'HTML', img: "https://i.ibb.co/sJ7fxv2/html.png"},
  {name:'CSS', img: "https://i.ibb.co/ZcVc2cW/css-3.png"},
  {name:'JavaScript', img: "https://i.ibb.co/BfsbD88/js.png"},
  {name:'Typescript', img: 'https://i.ibb.co/M70R2Nm/typescript.png'},
  {name:'Sass', img: 'https://i.ibb.co/HdjCd9w/sass.png'},
  {name:'Tailwind', img: 'https://i.ibb.co/Gn1ZxYG/tailwind.png'},
  {name:'React', img: 'https://i.ibb.co/rft20TC/react.png'},
  {name:'NextJS', img: 'https://i.ibb.co/r4wSr0Y/nextjs.png'},
  {name:'Angular', img: 'https://i.ibb.co/z6xP4zN/angular.png'},
];

export const services = [
  "Enterprise website",
  "E-commerce website",
  "Responsive website",
  "Custom development",
  "Secondary development",
];
