"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { PlaceholderImage } from "./placeholder-image"

interface FallbackImageProps extends Omit<ImageProps, "onError" | "src"> {
  src: string
  fallbackSrc?: string
}

export function FallbackImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  width,
  height,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setImgSrc(src)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Server-side or initial render
  if (!isClient) {
    return (
      <PlaceholderImage
        width={typeof width === "number" ? width : 300}
        height={typeof height === "number" ? height : 200}
        text={(alt as string) || "Funnelar"}
      />
    )
  }

  // Client-side render with image
  return <Image {...props} src={imgSrc || fallbackSrc} alt={alt} onError={handleError} width={width} height={height} />
}

