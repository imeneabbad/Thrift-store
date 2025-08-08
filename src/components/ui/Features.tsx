import React from 'react'

const Features = () => {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            The Thrift Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Curated sustainability meets timeless style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-wide">Value Redefined</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
              Exceptional quality at conscious price points, proving luxury needn't be extravagant.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-wide">Conscious Curation</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
              Each piece thoughtfully selected to extend its lifecycle with minimal environmental impact.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-wide">Distinctive Finds</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
              Rare vintage pieces and timeless designs that tell a story beyond seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features