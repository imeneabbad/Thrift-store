// app/page.tsx
'use client'

import { useAuth } from './providers/authProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Categories from '@/components/ui/Categories'
import CTA from '@/components/ui/CTA'
import Features from '@/components/ui/Features'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'

export default function Home() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home') // Redirect to protected home if authenticated
    }
  }, [isAuthenticated, router])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <Navbar showLoginButton={true} />
      <Hero />
      <Features />
      <Categories />
      <CTA />
      <Footer />
    </div>
  )
}