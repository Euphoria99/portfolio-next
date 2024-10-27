import { chatApp, eksk8s, flutterfirebase, videoStreaming } from '@/public/assets';

// const skillList = ["JavaScript", "Node.js", " MongoDB", "Angular", "Express.js", "AWS", "Docker", " Kubernetes"]

const bioData = {
  name: "Pavan Bhat",
  email: 'pavanbhat613@gmail.com',
  tagLine: "I build Web Apps and run them on Cloud",
  tagLine2: "Full Stack Developer | Software Engineer | DevOps Enthusiast",
  summary: `I&apos;m a software developer based in Mangalore, Karnataka-India, specializing in <br /> building  websites and mobile applications and everything in between.`,
  about: "<p>I'm Pavan, a Full Stack Developer currently based in Athlone,Ireland. With nearly 3 years of experience in  front-end and back-end development, I bring a well-rounded approach to building high-quality web applications. My work spans multiple tech stacks, including AWS, JavaScript frameworks, Java frameworks and DevOps tools, enabling me to deliver robust and scalable solutions across the entire development lifecycle.</p><p>I enjoy tackling complex challenges and continuously expanding my skills to keep up with the latest in tech.</p>",
  skillList: ["Java", "Springboot", "JavaScript", " MongoDB", "Angular", "Node.js", "AWS", "Docker", " Kubernetes", "Jenkins"],
  enableResume: false,
  domain:'https://www.pavanbhat.dev'
}

const allLinks = {
  resume: 'https://www.google.com/',
  github:'https://github.com/Euphoria99/',
  linkedIn:'https://www.linkedin.com/in/bhat-pavan/',
  twitter:'https://twitter.com/pavanbhat_99',
  facebook:'https://www.facebook.com/pavan.bhat.906',
  email:'pavanbhat613@gmail.com',
  discord:''
}

const experienceList = [
  {
    "company": "Covalensedigital",
    "jobTitle": "Software Developer-1",
    "jobDuration": "Feb 2024 - August 2024",
    "responsibilities": [
      "Designed and developed Java-based enterprise applications leveraging Spring Boot and microservices architecture.",
      "Architected scalable and high-performance backend systems to enhance business workflows and processes.",
      "Collaborated with cross-functional teams to deliver innovative software solutions, ensuring alignment with project goals.",
      "Optimized database interactions using Hibernate for Object-Relational Mapping (ORM), focusing on efficient data management and integrity."
    ],
    "companyLink": "https://covalensedigital.com"
  },
  {
    "company": "The Web People",
    "jobTitle": "Web Developer",
    "jobDuration": "Aug 2022 - January 2024",
    "responsibilities": [
      "Implement responsive design principles to ensure compatibility across various devices and browsers. ",
      "Design, develop and maintain efficient, reusable and reliable  code using Angular,NgZorro(ant-design) and Node.js. ",
      "Implement and maintain server-side rendering (SSR)and static site generation (SSG) for improved performance and user experience. ",
      "Work closely with back-end developers to define and implement APIs and data fetching mechanisms. ",
      "Integrate third-party APIs and services to enhance application functionality. ",
    ],
    "companyLink": "https://thewebpeople.in"
  }
];

const featuredProjectList = [
  {
    projectName: "CineCast: Video Streaming Platform",
    projectDesc: `<p className='bg-cardColor text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
    Comprehensive video streaming platform developed using <span class='text-textColor'>Angular</span>, <span class='text-textColor'>Java</span>, 
    <span class='text-textColor'>Spring Boot</span>, and <span class='text-textColor'>MySQL</span>. It supports video upload and adaptive streaming 
    across multiple resolutions, ensuring a smooth viewing experience.</p>`,
    projectTech: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'HLS', 'Docker', 'ffmpeg'],
    projectLink: '',
    projectImage: videoStreaming, 
    githubLink: 'https://github.com/Euphoria99/cinecast-springboot' 
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
    projectName: "Echowave: A Chat App",
    projectDesc: `<p className='bg-cardColor text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
    Real-time chat application built with <span class='text-textColor'>MongoDB</span>, <span class='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
    It uses WebSocket technology to provide instant messaging capabilities.</p>`,
    projectTech: ['MongoDB', 'Express', 'React', 'Node.js', 'Websockets', 'Tailwind.css'],
    projectLink: '',
    projectImage: chatApp,
    githubLink: 'https://github.com/Euphoria99/echowave-react'
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


const otherProjects = [
  {
    "title": "REST Backend API",
    "desc": "A CRUD application built with Express.js, Node.js and MongoDB that operates over REST.",
    "listItem": ["Node.js",  "Express.js", "MongoDB", "Mongoose"],
    "link": "https://github.com/Euphoria99/REST_API"
  },
  {
    "title": "QrPix",
    "desc": "A web app to generate valid QR codes with readable images.",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com/Euphoria99/QrPix"
  },
  {
    "title": "Angular Universal",
    "desc": "An Angular app leveraging SSR to provide better performance and SEO optimization.",
    "listItem": ["Angular", "TypeScript", "Node.js"],
    "link": "https://github.com/Euphoria99/Angular_Universal"
  },
  {
    "title": "Travel UI",
    "desc": "A Flutter Travel Booking app UI concept.",
    "listItem": ["Flutter", "Dart"],
    "link": "https://github.com/Euphoria99/TravelUI"
  },
  {
    "title": "Huddle",
    "desc": "A React UI app that leverages styled components",
    "listItem": ["React", "Styled Components", "JavaScript"],
    "link": "https://github.com/Euphoria99/Huddle-React-StyledComponents"
  },
  {
    "title": "Gojo",
    "desc": "A minimalistic static website built using HTML, CSS and Javascript",
    "listItem": ["HTML", "CSS", "JavaScript"],
    "link": "https://github.com/Euphoria99/gojo"
  },
];

const educationList = [
  {
    instutionName: "Technological University of the Shannon: Midlands Midwest",
    course: "Master of Science in Software Design and Cloud Native Computing",
    placeOfStudy: "Athlone, Co. Westmeath, Ireland",
    durationOfStudy: "1 years",
    institutionLink: "https://tus.ie/",
  },
  {
    instutionName: "Sahaydri College of Engineering & Management",
    course: "Bachelor of Engineering in Computer Science & Engineering",
    placeOfStudy: "Mangaluru, Karnataka, India",
    durationOfStudy: "4 years",
    institutionLink: "https://sahyadri.edu.in/",
  },
  {
    instutionName: "Sharada PU College",
    course: "Pre University, PCMS(Phyisics, Chemistry, Mathematics, Statistics)",
    placeOfStudy: "Mangaluru, Karnataka, India",
    durationOfStudy: "2 years",
    institutionLink: "https://sharadapuc.org/",
  },
]


export { allLinks, experienceList, bioData, featuredProjectList, otherProjects, educationList };
