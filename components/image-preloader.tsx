"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  imagePaths: string[]
}

export function ImagePreloader({ imagePaths }: ImagePreloaderProps) {
  useEffect(() => {
    // Preload images only on the client side
    const preloadImages = () => {
      imagePaths.forEach((path) => {
        const img = new Image()
        img.src = path
      })
    }

    // Small delay to ensure this doesn't block initial render
    const timer = setTimeout(() => {
      preloadImages()
    }, 100)

    return () => clearTimeout(timer)
  }, [imagePaths])

  // This component doesn't render anything
  return null
}

