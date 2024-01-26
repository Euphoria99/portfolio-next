import Home from "@/components/main/Home";


export const metadata = {
  generator: 'Next.js',
  applicationName: 'Pavan Bhats Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Pavan' }],
  creator: 'Pavan Bhat',
  publisher: 'Pavan Bhat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: 'Pavan Bhats Portfolio',
    description: 'Next.js portfolio by Pavan Bhat',
    url: '',
    siteName: 'Pavan Bhat',
    images: [],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large-image',
    title: 'Pavan Bhat',
    description: 'Next.js portfolio by Pavan Bhat',
    creator: '@pavanbhat_99',
    image: [
      {
        url: '',
        alt: '',
      },
    ],
  },
}


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
