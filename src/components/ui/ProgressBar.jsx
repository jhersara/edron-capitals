'use client'
import '@/components/ui/progressbar.css'

export default function ProgressBar({ step, total = 8 }) {
  return (
    <div className="progress">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`progress__step ${step >= i + 1 ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}
