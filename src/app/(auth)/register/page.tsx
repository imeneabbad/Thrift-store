'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Register Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="text-2xl font-light tracking-tight text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
              ThriftStore
            </div>
            <h2 className="mt-8 text-3xl font-light text-gray-900 tracking-tight">
              Create your account
            </h2>
            <p className="mt-3 text-sm text-gray-500 font-light">
              Join our community of conscious shoppers
            </p>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-6">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-normal text-gray-700 tracking-wide">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-normal text-gray-700 tracking-wide">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="Last name"
                  />
                </div>
              </div>
              
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
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-normal text-gray-700 tracking-wide">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="terms" className="text-sm text-gray-600 font-light">
                  I agree to the{' '}
                  <span className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                  {' '}and{' '}
                  <span className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-sm text-sm font-normal text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 tracking-wider transition-all duration-200"
            >
              CREATE ACCOUNT
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500 font-light">
                Already have an account?{' '}
                <Link href={'/login'}>
                  <span className="text-gray-900 hover:text-gray-700 font-normal tracking-wide transition-colors cursor-pointer">
                    Sign in
                  </span>
                </Link>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-100/80 z-10"></div>
        <div 
          className="w-full bg-cover bg-center bg-gray-200"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjlGQUZCIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRTVFN0VCIi8+CjxyZWN0IHg9IjQ2MCIgeT0iMzAwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRDVEOURGIi8+CjxyZWN0IHg9IjI1MCIgeT0iNTAwIiB3aWR0aD0iNDAiIGhlaWdodD0iODAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMzgwIiBjeT0iMjAwIiByPSIyNSIgZmlsbD0iI0QxRDVEQiIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSI2MDAiIHI9IjMwIiBmaWxsPSIjRDFENURCIi8+Cjwvc3ZnPgo=')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-gray-900 px-8">
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Join Our Community
              </h3>
              <p className="text-lg font-light opacity-80 max-w-sm">
                Discover curated collections that reflect your values and aesthetic sensibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;