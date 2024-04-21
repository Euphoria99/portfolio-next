import { chatApp, eksk8s, flutterfirebase } from '@/public/assets';

// const skillList = ["JavaScript", "Node.js", " MongoDB", "Angular", "Express.js", "AWS", "Docker", " Kubernetes"]

const bioData = {
  name: "Pavan Bhat",
  email: 'pavanbhat4u@gmail.com',
  tagLine: "I build Web Apps and run them on Cloud",
  tagLine2: "Software Developer | DevOps Enthusiast",
  summary: `I&apos;m a software developer based in Mangalore, Karnataka-India, specializing in <br /> building  websites and mobile applications and everything in between.`,
  about: "<p>Welcome to my corner of the web! I&apos;m Pavan,a seasoned Software Developer hailing from the vibrant tech hub of Bengaluru, India, with roots tracing back to the serene coastal city of Mangalore.</p><p>With over 2 years of hands-on experience,I specialize in crafting robust web applications and diving into the intricacies of DevOps.</p><p>I'm all about crafting sleek, scalable solutions that deliver top-notch performance.</p>",
  skillList: ["Java", "Springboot", "JavaScript", " MongoDB", "Angular", "Node.js", "AWS", "Docker", " Kubernetes", "Jenkins"],
  enableResume: false,
}

const experienceList = [
  {
    "company": "Covalensedigital",
    "jobTitle": "Software Developer-1",
    "jobDuration": "Feb 2024 - present",
    "responsibilities": [
      "Design, develop and deploy Java-based enterprise applications using Spring Boot and microservices architecture.",
      "Architect and implement scalable, high-performance, and reliable backend systems to support business processes and workflows.",
      "Architect and implement scalable, high-performance, and reliable backend systems to support business processes and workflows.",  
      "Collaborate with cross-functional teams to design, develop and implement software solutions.",
      "Design database schemas, write optimized SQL queries and ensure data integrity within the applicatio.Utilize Hibernate for seamless Object-Relational Mapping (ORM), allowing for efficient and maintainable database interactions."
    ],
    "companyLink": "https://covalensedigital.com"
  },
  {
    "company": "The Web People",
    "jobTitle": "Web Developer",
    "jobDuration": "Aug 2022 - January 2024",
    "responsibilities": [
      "Design, develop and maintain efficient, reusable and reliable  code using Angular,NgZorro(ant-design) and Node.js. ",
      "Implement and maintain server-side rendering (SSR)and static site generation (SSG) for improved performance and user experience. ",
      "Work closely with back-end developers to define and implement APIs and data fetching mechanisms. ",
      "Integrate third-party APIs and services to enhance application functionality. ",
      "Implement responsive design principles to ensure compatibility across various devices and browsers. "
    ],
    "companyLink": "https://thewebpeople.in"
  }
];

const featuredProjectList = [
  {
    projectName: "Echowave: A Chat App",
    projectDesc: `<p className='bg-cardColor text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
    Real-time chat application built with <span class='text-textColor'>MongoDB</span>, <span class='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
    It uses WebSocket technology to provide instant messaging capabilities.</p>`,
    projectTech: ['MongoDB', 'Express', 'React', 'Node.js', 'Websockets', 'Tailwind.css'],
    projectLink: '',
    projectImage: chatApp,
    githubLink: 'https://github.com/Euphoria99'
  },
  {
    projectName: "Microservices app on AWS EKS",
    projectDesc: `<p className='bg-cardColor text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
    Developed a highly scalable microservices application using <span class='text-textColor'>Express.js</span>, <span class='text-textColor'>Docker</span> and <span class='text-textColor'>Kubernetes</span> where  apps communicate securely using  ClusterIP and Nodeport services.</p>`,
    projectTech: ['Kubernetes', 'Docker', 'JavaScript', 'Express', 'MongoDB', 'Mongoose'],
    projectImage: eksk8s,
    projectLink: '',
    githubLink: 'https://github.com/Euphoria99/K8s'
  },
  {
    projectName: "NoteVerse: Bloc Notes App",
    projectDesc: `<p className='bg-cardColor text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>A comprehensive notes app built using <span class='text-textColor'> Flutter</span> that allows users to perform all
    essential CRUD operations.The app incorporates <span class='text-textColor'> Bloc </span> pattern and is built with <span class='text-textColor'>Firebase </span> as backend, utilizing Cloud Firestore as the cloud database for efficient data storage and retrieval.</p>`,
    projectTech: ['Flutter', 'Dart', 'Bloc', 'SQLite', 'Firebase Auth', 'Cloud Firestore'],
    projectImage: flutterfirebase,
    projectLink: '',
    githubLink: 'https://github.com/Euphoria99/NoteVerse-flutter'
  },
]

const allLinks = {
  resume: 'https://www.google.com/',
  github:'https://github.com/Euphoria99/',
  linkedIn:'https://www.linkedin.com/in/pavan-bhat-7544781aa/',
  twitter:'https://twitter.com/pavanbhat_99',
  discord:''
}

const otherProjects = [
  {
    "title": "Mausam",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["Flutter", "BLoC", "Firebase"],
    "link": "https://github.com"
  },
  {
    "title": "Qrpix",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com"
  },
  {
    "title": "Paytm",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com"
  },
  {
    "title": "CGI-1",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["Flutter", "BLoC", "Firebase"],
    "link": "https://github.com"
  },
  {
    "title": "CGI-2",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com"
  },
  {
    "title": "CGI-3",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci.",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com"
  },
];

export { allLinks, experienceList, bioData, featuredProjectList, otherProjects };
