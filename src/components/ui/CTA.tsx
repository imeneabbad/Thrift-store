import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-purple-50 to-indigo-100 text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-transparent to-purple-50/50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
          Discover Curated Excellence
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-70 max-w-2xl mx-auto leading-relaxed font-light">
          Join our community of discerning individuals who appreciate the finest in contemporary design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register" 
            className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-4 rounded-sm text-base font-normal transition-all duration-300 hover:shadow-xl tracking-wider"
          >
            CREATE ACCOUNT
          </Link>
          <Link 
            href="/login" 
            className="border border-gray-300 text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-sm text-base font-normal transition-all duration-300 backdrop-blur-sm tracking-wider"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA