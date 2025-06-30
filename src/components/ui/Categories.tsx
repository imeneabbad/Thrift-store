import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Clothing', emoji: '👕', href: '/shop/clothing' },
              { name: 'Furniture', emoji: '🛋️', href: '/shop/furniture' },
              { name: 'Books', emoji: '📚', href: '/shop/books' },
              { name: 'Electronics', emoji: '📱', href: '/shop/electronics' }
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200 hover:border-emerald-300"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Categories
