import React, { useRef, useState } from 'react'
import { Media, previewTitleClasses } from '@/types/TabContentTypes'
import { Link } from 'react-router-dom'
import { PreviewLinkWrapper } from './LinkWrapper'

interface ComponentPreviewProps {
  media?: Media
  sourceCode?: string
  title?: string
  subtitle?: string
  dimensions?: string[]
  link?: string
}

const MediaContent: React.FC<{ media: Media; isHovered: boolean }> = ({
  media,
  isHovered,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  if (media.type == 'custom') {
    return media.content
  }

  React.useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((err) => {
          console.error('Error playing video:', err)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isHovered, media.type])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  if (media.type === 'image') {
    return (
      <img
        src={media.src}
        alt={media.alt}
        className="w-full h-full object-cover shadow-md"
      />
    )
  } else if (media.type === 'video') {
    return (
      <video
        ref={videoRef}
        src={media.lqsrc || media.src}
        muted
        loop
        onLoadedData={handleVideoLoaded}
        className={`w-full h-full object-cover shadow-md transition-opacity duration-200 ease-in loop ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    )
  }

  return null
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  media,
  title,
  subtitle,
  sourceCode,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <PreviewLinkWrapper
      className={`w-full h-full grid  ${isHovered ? 'shadow-xl shadow-white' : 'shadow-sm'} transition-shadow`}
      urlSuffix={link || ''}
    >
      <div
        className="grid grid-cols-1 grid-rows-1 relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`px-8 py-6 shadow-lg z-10 relative bg-card col-start-1 row-start-1 flex flex-col gap-4 max-h-[400px] `}
        >
          {/* title */}
          <div className="relative">
            <div className="relative z-10">
              {title && (
                <div className="grid">
                  <p
                    className={`${previewTitleClasses} ${isHovered ? 'text-blue-400 visited:text-purple-400' : ''}`}
                  >
                    {title}
                  </p>
                </div>
              )}
            </div>
            {/* {title && (
              <div className="col-start-1 row-start-1 z-[5] absolute bottom-0 bg-gradient-to-t from-card to-transparent w-full h-[50px]"></div>
            )} */}
          </div>

          {/* media */}
          <div className="relative grid grid-cols-1 grid-rows-1 overflow-hidden h-[200px] md:h-[300px]">
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              {media && (
                <div
                  className="h-full w-full object-cover"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <MediaContent media={media} isHovered={isHovered} />
                </div>
              )}
            </div>
            {media && (
              <div className="col-start-1 row-start-1 z-[15] absolute bottom-0 bg-gradient-to-t from-card to-transparent w-full h-[50px] pointer-events-none"></div>
            )}
          </div>

          {/* subtitle */}
          <div className="relative grid grid-cols-1 grid-rows-1">
            <p className="relative z-10 text-sm md:text-base font-medium text-secondary text-textcolor self-end">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </PreviewLinkWrapper>
  )
}
