import Image from "next/image"
import type { ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string
  alt: string
  aspectRatio?: "square" | "video" | "wide" | "auto"
}

export function OptimizedImage({ src, alt, aspectRatio = "auto", className, ...props }: OptimizedImageProps) {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  }

  // Use placeholder if src is empty or invalid
  const imageSrc = src || "/placeholder.svg"

  // Add blur placeholder for images
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="

  return (
    <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className || ""}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
        {...props}
      />
    </div>
  )
}

