'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Categories', href: '#categories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo - Minimalist with subtle character */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center">
              <FiShoppingBag className="text-white text-sm" />
            </div>
            <span className="text-xl font-medium text-gray-900 tracking-tight">
              Thrift<span className="text-gray-500">Store</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation - Clean but with your original options */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.a 
                whileHover={{ color: '#000000' }}
                className="text-gray-500 font-normal text-sm uppercase tracking-wider transition-colors hover:text-gray-900"
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
        </div>

        {/* Your original Shop Now button - but more refined */}
        <div className="hidden md:block">
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile menu button - Minimal */}
        <button 
          className="md:hidden p-1 text-gray-500 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="text-lg" />
          ) : (
            <FiMenu className="text-lg" />
          )}
        </button>

        {/* Mobile Menu - Includes all your original options */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white py-3 px-5 space-y-3 border-t border-gray-100 shadow-sm"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a 
                  className="block py-2 text-gray-700 hover:text-black transition-colors text-sm uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Link href="/shop">
              <button className="w-full bg-gray-900 text-white py-2 rounded-md text-sm mt-2 hover:bg-gray-800 transition">
                Shop Now
              </button>
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;