'use client'
import { useAuth } from '@/app/providers/authProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, signIn } = useAuth()
  
  const router = useRouter()
    console.log('isAuthenticated : ', isAuthenticated)

  useEffect(() => {
    // Redirect if already authenticated
    
    if (isAuthenticated) {
      console.log('hghg')
      router.push('/home')
      console.log('after push')
    }
  }, [isAuthenticated, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn()
    router.push('/home')
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="text-2xl font-light tracking-tight text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
              ThriftStore
            </div>
            <h2 className="mt-8 text-3xl font-light text-gray-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-3 text-sm text-gray-500 font-light">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-normal text-gray-700 tracking-wide">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-normal text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-light">
                  Remember me
                </label>
              </div>

              <div className="text-sm text-gray-900 hover:text-gray-700 font-light tracking-wide transition-colors cursor-pointer">
                Forgot password?
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-sm text-sm font-normal text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 tracking-wider transition-all duration-200"
            >
              SIGN IN
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500 font-light">
                Don't have an account?{' '}
                <Link href={'/register'}>
                  <span className="text-gray-900 hover:text-gray-700 font-normal tracking-wide transition-colors cursor-pointer">
                    Create one
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-indigo-100/80 z-10"></div>
        <div 
          className="w-full bg-cover bg-center bg-gray-200"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjlGQUZCIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iNDUwIiBjeT0iMzUwIiByPSI2MCIgZmlsbD0iI0Q1RDlERiIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSI1NTAiIHI9IjUwIiBmaWxsPSIjRTVFN0VCIi8+CjxyZWN0IHg9IjIwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iMTAwIiB5PSI2NTAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNCIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-gray-900 px-8">
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Curated Excellence
              </h3>
              <p className="text-lg font-light opacity-80 max-w-sm">
                Join our community of discerning individuals who appreciate quality and conscious consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;