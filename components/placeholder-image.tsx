interface PlaceholderImageProps {
  width?: number
  height?: number
  text?: string
  bgColor?: string
  textColor?: string
  className?: string
}

export function PlaceholderImage({
  width = 800,
  height = 600,
  text = "Funnelar",
  bgColor = "#f3e8ff",
  textColor = "#a855f7",
  className = "",
}: PlaceholderImageProps) {
  // Create an SVG placeholder image
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" fontFamily="Arial" fontSize="24" fill="${textColor}" textAnchor="middle">${text}</text>
    </svg>
  `

  // Convert SVG to a data URL
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          backgroundImage: `url("${dataUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}

