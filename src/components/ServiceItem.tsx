import React, { useState } from 'react'

interface StaticServiceItemProps {
  interactable: false
  name: string
  url: string
  color: string
}

interface ActiveServiceItemProps {
  interactable: true
  active: boolean
  name: string
  url: string
  color: string
  setActiveService: React.Dispatch<React.SetStateAction<string>>
}

type ServiceItemProps = StaticServiceItemProps | ActiveServiceItemProps

export const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  // No destructuring because of type discrimination union

  let containerStyles: React.CSSProperties = {
    // null styles
    border: '2px solid transparent',
    boxShadow: `0px 0px 20px 1px rgba(31, 41, 55, 0.2)`,
  }

  if (props.interactable === false) {
    return (
      <div
        className="w-20 h-20 max-w-full max-h-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded"
        style={containerStyles}
      >
        <img
          src={props.url}
          alt={props.name}
          title={props.name}
          className="w-16 h-16 max-w-[85%] max-h-[85%] object-contain"
        />
      </div>
    )
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const toggleActiveService = () => {
    props.active
      ? props.setActiveService('')
      : props.setActiveService(props.name)
  }

  const interactiveContainerStyles = props.active
    ? {
        // selected styles
        border: `2px solid ${props.color}`,
        boxShadow: `0px 4px 10px ${props.color}`,
        backgroundColor: 'white',
      }
    : isHovered
      ? {
          // hovered styles
          border: `2px solid ${props.color}`,
          boxShadow: `0px 2px 6px ${props.color}`,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }
      : containerStyles

  return (
    <div
      onClick={toggleActiveService}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-20 max-w-full max-h-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded"
      style={interactiveContainerStyles}
    >
      <img
        src={props.url}
        alt={props.name}
        title={props.name}
        className="w-16 h-16 max-w-[85%] max-h-[85%] object-contain"
      />
    </div>
  )
}
