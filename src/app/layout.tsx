import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './providers/authProvider'

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

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}