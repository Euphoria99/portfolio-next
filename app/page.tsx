import Home from "@/components/main/Home";
import { zhang2 } from "@/public/assets";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Pavan Bhat',
  description: 'Portfolio by Pavan Bhat',
  generator: 'Next.js',
  applicationName: 'Pavan Bhat\'s Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Pavan' , url:'https://www.pavanbhat.dev/'}],
  creator: 'Pavan Bhat',
  metadataBase: new URL("https://www.pavanbhat.dev/"),
  publisher: 'Pavan Bhat',
  openGraph: {
    type: 'website',
    title: 'Pavan Bhats Portfolio',
    description: 'Portfolio by Pavan Bhat',
    url: 'https://www.pavanbhat.dev/',
    siteName: 'Pavan Bhat',
    images: [
      {
        url: zhang2.src,
        alt: 'Pavan\'s Image',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavan Bhat',
    description: 'Pavan Bhat\'s Portfolio',
    creator: '@pavanbhat_99',
    site: '@pavanbhat_99',
    images: [
      {
        url:zhang2.src,
        width: 512,
        height: 286,
        alt: 'Pavan\'s Image',
      },
    ],
  },
  // 
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
