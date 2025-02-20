interface GrainTextureProps {
  frequency?: number
  opacity?: number
}

export const GrainTexture: React.FC<GrainTextureProps> = ({
  frequency,
  opacity,
}) => {
  return (
    <svg className="w-full h-full absolute top-0 left-0 pointer-events-none z-0">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={frequency || 0.6}
          stitchTiles="stitch"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#noiseFilter)"
        fill="transparent"
        style={{ opacity: opacity || 1 }}
      />
    </svg>
  )
}
