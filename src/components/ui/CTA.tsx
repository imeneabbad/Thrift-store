import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className="px-6 py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Thrifting?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who've found amazing deals and unique treasures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Create Account
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA
