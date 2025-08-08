// components/loading-spinner.tsx
export function LoadingSpinner({ variant = 'default' }: { variant?: 'default' | 'vintage' }) {
  return (
    <div className={`relative ${variant === 'vintage' ? 'text-amber-700' : 'text-gray-700'}`}>
      <div className="w-16 h-16 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
      <div className={`absolute inset-0 flex items-center justify-center ${variant === 'vintage' ? 'font-serif text-xl' : ''}`}>
        {variant === 'vintage' ? 'Curating treasures...' : 'Loading...'}
      </div>
    </div>
  )
}