const skillList = ["JavaScript","Node.js", " MongoDB", "Angular" , "Express.js", "AWS", "Docker", " Kubernetes"]

const bioData = {
  name:"Pavan Bhat",
  tagLine: "I build Web Apps and run them on Cloud",
  summary: `I&apos;m a software developer based in Mangalore, Karnataka-India, specializing in <br /> building  websites and mobile applications and everything in between.`,
  about: "Hello! I'm Pavan, a Software Developer based in Mangalore,India. I enjoy creating beautiful and reliable applications for internet andphones. My goal is to always build scalable products and performance experiences.",
  skillList : ["JavaScript","Node.js", " MongoDB", "Angular" , "Express.js", "AWS", "Docker", " Kubernetes"],
  enableResume: true,


}

const projectList = [
  {
      projectName: " Echowave: A Chat App",
      projectDesc: `<p className='bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
      Real-time chat application built with <span class='text-textColor'>MongoDB</span>, <span class='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
      It uses WebSocket technology to provide instant messaging capabilities.</p>`,
      projectTech: ['MongoDB', 'Express', 'React', 'Node.js', 'Websockets', 'Tailwind.css'],
      projectLink : '',
      githubLink:'https://github.com/Euphoria99'

  },
  {
      projectName: " Echowave: A Chat App-2",
      projectDesc: `<p className='bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
      Real-time chat application built with <span class='text-textColor'>MongoDB</span>, <span class='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
      It uses WebSocket technology to provide instant messaging capabilities.</p>`,
      projectTech: ['MongoDB', 'Express', 'React', 'Node.js', 'Websockets', 'Tailwind.css'],
      projectLink : 'https://www.youtube.com/',
      githubLink:'https://github.com/Euphoria99'
  },
]

const allLinks = [
  {
    name : 'resume',
    value: 'https://www.google.com/'
  }
]
const experienceList = [
    {
      "company": "GB1",
      "jobTitle": "Web Developer",
      "jobDuration": "Aug 2022 - present",
      "responsibilities": [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
      ],
      "companyLink": "www.google.com"
    },
    {
      "company": "GB2",
      "jobTitle": "Web Developer",
      "jobDuration": "Aug 2022 - present",
      "responsibilities": [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
      ],
      "companyLink": "www.google.com"
    }
  ];
  
export { skillList, allLinks,  experienceList , bioData , projectList};
  