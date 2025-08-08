import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 py-16 bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-light tracking-tight text-white">ThriftStore</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Curated excellence for the discerning individual who values quality and conscious consumption.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs font-normal tracking-widest text-gray-400 uppercase mb-6 opacity-90">Collections</h4>
            <ul className="space-y-4">
              {[
                { name: 'All Items', href: '/shop' },
                { name: 'Apparel', href: '/shop/clothing' },
                { name: 'Furnishings', href: '/shop/furniture' },
                { name: 'Literature', href: '/shop/books' },
                { name: 'Devices', href: '/shop/electronics' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="text-xs font-normal tracking-widest text-gray-400 uppercase mb-6 opacity-90">Account</h4>
            <ul className="space-y-4">
              {[
                { name: 'Sign In', href: '/login' },
                { name: 'Register', href: '/register' },
                { name: 'Profile', href: '/profile' },
                { name: 'Orders', href: '/orders' },
                { name: 'Wishlist', href: '/wishlist' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-white transition-colors duration-300 font-light tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-normal tracking-widest text-gray-400 uppercase mb-6 opacity-90">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Contact', href: '/contact' },
                { name: 'Shipping', href: '/shipping' },
                { name: 'Returns', href: '/returns' },
                { name: 'Sustainability', href: '/sustainability' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-white transition-colors duration-300 font-light tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} ThriftStore. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs font-light tracking-wide transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-xs font-light tracking-wide transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer