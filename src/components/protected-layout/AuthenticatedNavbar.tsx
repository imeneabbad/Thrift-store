'use client'

import { useAuth } from '@/app/providers/authProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LuxuryNavbar() {
  const { signOut } = useAuth()
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Refined Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-light tracking-tight text-gray-900 transition-colors group-hover:text-gray-700">
              ThriftStore
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="/collections" 
              className={`text-sm font-light tracking-wider transition-all duration-300 hover:text-gray-900 relative ${
                pathname === '/collections' 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              }`}
            >
              COLLECTIONS
              {pathname === '/collections' && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gray-900"></div>
              )}
            </Link>
            
            <Link 
              href="/archive" 
              className={`text-sm font-light tracking-wider transition-all duration-300 hover:text-gray-900 relative ${
                pathname === '/archive' 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              }`}
            >
              ARCHIVE
              {pathname === '/archive' && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gray-900"></div>
              )}
            </Link>
            
            <Link 
              href="/about" 
              className={`text-sm font-light tracking-wider transition-all duration-300 hover:text-gray-900 relative ${
                pathname === '/about' 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              }`}
            >
              ABOUT
              {pathname === '/about' && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gray-900"></div>
              )}
            </Link>
          </div>

          {/* Right Side - Icons & Account */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            {/* Heart Icon */}
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>

            {/* Shopping Bag Icon */}
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-300 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center font-light">
                2
              </span>
            </button>

            {/* Account Dropdown */}
            <div className="relative group">
              <button className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light tracking-wide">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light tracking-wide">
                    Orders
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light tracking-wide">
                    Settings
                  </Link>
                  <hr className="my-2 border-gray-100" />
                  <button 
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light tracking-wide"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </nav>
  )
}