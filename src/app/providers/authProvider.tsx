// app/providers/auth-provider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check localStorage when component mounts
    const signedIn = localStorage.getItem('signedIn') === 'true'
    setIsAuthenticated(signedIn)
  }, [])

  const signIn = () => {
    localStorage.setItem('signedIn', 'true')
    setIsAuthenticated(true)
  }

  const signOut = () => {
    localStorage.removeItem('signedIn')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}