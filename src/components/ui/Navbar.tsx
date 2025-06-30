import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-teal-600">
          Thrift<span className="text-emerald-500">Store</span>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#features" className="hover:text-teal-600">Features</a>
          <a href="#categories" className="hover:text-teal-600">Categories</a>
          <a href="#contact" className="hover:text-teal-600">Contact</a>
        </div>

        {/* CTA button */}
        <div>
          <Link href="/shop">
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
