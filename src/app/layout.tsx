import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thrift Store - Sustainable Shopping & Unique Finds',
  description: 'Discover unique treasures, sustainable fashion, and incredible deals. Shop pre-loved items that tell a story.',
  keywords: 'thrift store, second hand, vintage, sustainable fashion, eco-friendly shopping',
  authors: [{ name: 'Thrift Store' }],
  openGraph: {
    title: 'Thrift Store - Sustainable Shopping & Unique Finds',
    description: 'Discover unique treasures, sustainable fashion, and incredible deals.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrift Store - Sustainable Shopping & Unique Finds',
    description: 'Discover unique treasures, sustainable fashion, and incredible deals.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}