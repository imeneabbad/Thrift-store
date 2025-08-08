import Link from 'next/link'

const Categories = () => {
  const categories = [
    { 
      name: 'Apparel', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ), 
      href: '/shop/clothing', 
      accent: 'border-blue-200' 
    },
    { 
      name: 'Furnishings', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ), 
      href: '/shop/furniture', 
      accent: 'border-amber-200' 
    },
    { 
      name: 'Literature', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      href: '/shop/books', 
      accent: 'border-emerald-200' 
    },
    { 
      name: 'Devices', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      href: '/shop/electronics', 
      accent: 'border-purple-200' 
    }
  ]

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Collections
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Curated essentials for the discerning individual
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group">
              <div className={`
                bg-white rounded-lg p-8 aspect-square flex flex-col items-center justify-center
                border border-gray-100 transition-all duration-300
                hover:shadow-sm hover:border-t-2 ${category.accent}
              `}>
                <div className="text-gray-600 mb-6 transition-all duration-500 group-hover:scale-90 group-hover:text-gray-900">
                  {category.icon}
                </div>
                <h3 className="text-lg font-normal text-gray-900 tracking-wide">
                  {category.name}
                </h3>
                <div className="w-8 h-px bg-gray-300 mt-6 group-hover:w-16 group-hover:bg-gray-900 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/shop">
            <button className="
              px-8 py-3 bg-transparent text-gray-900 rounded-none
              text-sm font-normal tracking-wider hover:bg-gray-50
              transition-all duration-300 border-b border-gray-900
              hover:tracking-widest
            ">
              EXPLORE COLLECTIONS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories