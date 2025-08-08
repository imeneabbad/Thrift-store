// app/(protected)/layout.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/providers/authProvider'
import { useEffect, useState } from 'react'
import { LoadingSpinner } from '@/components/protected-layout/LoadingSpinner'
import { LuxuryNavbar } from '@/components/protected-layout/AuthenticatedNavbar'
import { ThriftFooter } from '@/components/protected-layout/ThriftFooter'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [showFadeEffect, setShowFadeEffect] = useState(false)

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/login')
    } else if (isAuthenticated) {
      // Show elegant fade-in effect
      setShowFadeEffect(true)
    }
  }, [isAuthenticated, router])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 font-light tracking-wide">Loading...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? (
    <div className={`min-h-screen flex flex-col bg-white transition-all duration-500 ${showFadeEffect ? 'opacity-100' : 'opacity-0'}`}>
      {/* Chic navbar */}
      <LuxuryNavbar />
      
      {/* Main content with elegant styling */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white">
            {children}
          </div>
        </div>
      </main>
      
      {/* Luxury footer */}
      <ThriftFooter />
    </div>
  ) : null
}