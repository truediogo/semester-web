import { CannyWidget } from '@/components/canny-widget'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feedback'
}

export default function FeedbackPage() {
  return (
    <div className="container flex flex-col items-center pt-6">
      <p className="text-gray-500 text-xs text-center">
        🇺🇸 Página parcialmente em Inglês (US)
      </p>
      <CannyWidget />
    </div>
  )
}
