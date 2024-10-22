// ServiceItem.tsx
import React, { useState } from "react";

interface ServiceItemProps {
  name: string;
  url: string;
  color: string;
  active: boolean;
  setActiveService: React.Dispatch<React.SetStateAction<string>>;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  name,
  url,
  color,
  active,
  setActiveService,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const toggleActiveService = () => {
    active ? setActiveService("") : setActiveService(name);
  };

  const containerStyles: React.CSSProperties = active
    ? { // selected styles
        border: `2px solid ${color}`,
        boxShadow: `0px 4px 10px ${color}`,
        backgroundColor: "white",
      }
    : isHovered
    ? { // hovered styles
        border: `2px solid ${color}`,
        boxShadow: `0px 2px 6px ${color}`,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }
    : { // null styles
        border: "2px solid transparent",
        boxShadow: `0px 0px 20px 1px rgba(31, 41, 55, 0.2)`,
      };

  return (
    <div
      onClick={toggleActiveService}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-20 max-w-full max-h-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded"
      style={containerStyles}
    >
      <img
        src={url}
        alt={name}
        title={name}
        className="w-16 h-16 max-w-[85%] max-h-[85%] object-contain"
      />
    </div>
  );
};
