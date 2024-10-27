import Home from "@/components/main/Home";
import { heroOG } from "@/public/assets";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Pavan Bhat\'s Portfolio',
  description: 'Explore Pavan Bhat\'s portfolio, featuring projects and skills in software development and engineering.',
  generator: 'Next.js',
  applicationName: 'Pavan Bhat\'s Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Software Developer', 'Web Developer', 'Full Stack Developer', 'Software Engineer', 'Backend Developer', 'Java Developer', 
    'React Developer', 'Node.js Developer', 'JavaScript Developer', 'TypeScript Developer', 'AWS Certified Developer', 'Docker', 
    'Developers in Dublin', 'Developers in Limerick', 'Developers in Cork', 'Developers in Galway', 'Developers in Athlone', 
    'Software Developer in Ireland', 'IT Jobs in Ireland', 'Remote Software Jobs Ireland', 'Frontend Developer', 'Backend Developer Ireland', 
    'MERN Stack Developer', 'Next.js Developer', 'SQL/NoSQL Database Developer', 'Junior Developer Ireland', 'Senior Software Engineer', 
    'Fintech Developer Ireland', 'E-commerce Developer Ireland', 'Engineers in Dublin', 'Engineers in Limerick', 'Engineers in Cork', 
    'Engineers in Galway', 'Engineers in Athlone', 'Engineers in Mangaluru', 'Engineers in Mangalore', 'Engineers in Bengaluru', 
    'Engineers in Bangalore', 'Fullstack Developers in Dublin', 'Fullstack Developers in Limerick', 'Fullstack Developers in Cork', 
    'Fullstack Developers in Galway', 'Fullstack Developers in Athlone', 'Fullstack Developers in Mangaluru', 'Fullstack Developers in Mangalore', 
    'Fullstack Developers in Bengaluru', 'Fullstack Developers in Bangalore'
  ],
  authors: [{ name: 'Pavan', url: 'https://www.pavanbhat.dev/' }],
  creator: 'Pavan Bhat',
  metadataBase: new URL("https://www.pavanbhat.dev/"),
  publisher: 'Pavan Bhat',
  openGraph: {
    type: 'website',
    title: 'Pavan Bhat\'s Portfolio',
    description: 'Explore Pavan Bhat\'s portfolio, featuring projects and skills in software development and engineering.',
    url: 'https://www.pavanbhat.dev/',
    siteName: 'Pavan Bhat',
    images: [
      {
             url:heroOG.src,
        alt: 'Pavan Bhat\'s Profile Image for Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavan Bhat\'s Portfolio',
    description: 'Explore Pavan Bhat\'s portfolio, featuring projects and skills in software development and engineering.',
    creator: '@pavanbhat_99',
    site: '@pavanbhat_99',
    images: [
      {
        url:heroOG.src,
        width: 512,
        height: 286,
        alt: 'Pavan Bhat\'s Profile Image for Portfolio',
      },
    ],
  },
  robots: 'index, follow',
};

export default function Page() {

  const isServer = typeof window === 'undefined';
  console.log("🚀 ~ Home ~ isServer:", isServer)
  console.log(`Am I on the server side? ${isServer ? 'Yes' : 'No'}`);

  return (
      <main>
          <Home />
      </main>
  )
}
