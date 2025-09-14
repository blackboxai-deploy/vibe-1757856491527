import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Macani Solutions - IT Consulting & Managed Services | Saudi Arabia, Dubai, Riyadh',
  description: 'Leading IT consulting, outsourcing, and managed services provider in Saudi Arabia, Dubai, and Riyadh. Professional technology solutions for modern businesses.',
  keywords: 'IT consulting, managed services, outsourcing, Saudi Arabia, Dubai, Riyadh, technology solutions, Macani Solutions',
  authors: [{ name: 'Macani Solutions' }],
  creator: 'Macani Solutions',
  publisher: 'Macani Solutions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://macani.llc',
    siteName: 'Macani Solutions',
    title: 'Macani Solutions - Professional IT Services',
    description: 'Leading IT consulting and managed services provider in the Middle East',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Macani Solutions - Professional IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macani Solutions - Professional IT Services',
    description: 'Leading IT consulting and managed services provider',
    images: ['/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://macani.llc" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00ff00" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-inter bg-black text-white antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}