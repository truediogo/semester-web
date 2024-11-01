'use client'

import Script from 'next/script'
import React, { useState, useEffect } from 'react'
import { LoadingSpinner } from './ui/spinner'

// Define o tipo de `window.Canny` para evitar o erro de TypeScript
declare global {
  interface Window {
    Canny: any
  }
}

const CannyWidget = () => {
  const [isWidgetReady, setIsWidgetReady] = useState(false)

  useEffect(() => {
    const checkCanny = () => {
      if (typeof window.Canny !== 'undefined') {
        window.Canny('render', {
          boardToken: '68969c5f-cc35-3b79-6917-66e192771f3b',
          basePath: null,
          ssoToken: null,
          theme: 'light'
        })
        setIsWidgetReady(true)
      }
    }

    const interval = setInterval(checkCanny, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex w-full items-center justify-center bg-white pt-4 md:pt-8">
      {!isWidgetReady && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <Script src="https://canny.io/sdk.js" strategy="afterInteractive" />
      <div
        data-canny
        className={`${isWidgetReady ? 'block' : 'hidden'} w-full`}
      />
    </div>
  )
}

export { CannyWidget }
