import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Head } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pavan Bhat',
  description: 'Next.js portfolio by Pavan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtag = process.env.GTAG;
  return (
    <html lang="en">
      {/* <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head> */}
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="${gtag}" />
    </html>
  )
}
