import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Thrift Store</h3>
              <p className="text-gray-400">
                Your destination for sustainable shopping and unique finds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/shop" className="hover:text-white">All Items</Link></li>
                <li><Link href="/shop/clothing" className="hover:text-white">Clothing</Link></li>
                <li><Link href="/shop/furniture" className="hover:text-white">Furniture</Link></li>
                <li><Link href="/shop/books" className="hover:text-white">Books</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/login" className="hover:text-white">Sign In</Link></li>
                <li><Link href="/register" className="hover:text-white">Register</Link></li>
                <li><Link href="/profile" className="hover:text-white">My Profile</Link></li>
                <li><Link href="/orders" className="hover:text-white">My Orders</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Thrift Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
