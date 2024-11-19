import React, { useRef, useState } from "react";
import { Media, previewTitleClasses } from "@/types/TabContentTypes";
import { Link } from "react-router-dom";

interface ComponentPreviewProps {
  media?: Media;
  sourceCode?: string;
  title?: string;
  subtitle?: string;
  dimensions?: string[];
  link?: string;
}

const MediaContent: React.FC<{ media: Media; isHovered: boolean }> = ({ media, isHovered }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  let aspectRatio = null;

  if (media.type == "custom") {
    return media.content
  }

  if (media.dims && media.dims.w && media.dims.h) {
    aspectRatio = (media.dims.w / media.dims.h) * 100;
  }

  React.useEffect(() => {
    if (media.type === "video" && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, media.type]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  if (media.type === "image") {
    return (
      <div
        className="w-full relative mb-6 z-10"
        style={{ paddingBottom: aspectRatio ? `${aspectRatio}%` : "56.25%" }} // default to 16:9
      >
        <img
          src={media.src}
          alt={media.alt}
          className="absolute top-0 left-0 w-full h-full object-cover shadow-md"
        />
      </div>
    );
  } else if (media.type === "video") {
    return (
      <div
        className="w-full relative z-10"
        style={{ paddingBottom: aspectRatio ? `${aspectRatio}%` : "56.25%" }}
      >
        <video
          ref={videoRef}
          src={media.src}
          muted
          loop
          onLoadedData={handleVideoLoaded}
          className={`absolute top-0 left-0 w-full h-full object-cover shadow-md transition-opacity duration-200 ease-in ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    );
  }

  return null;
};

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  media,
  title,
  subtitle,
  sourceCode,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className="grid grid-cols-1 grid-rows-1 grid-col relative cursor-pointer "
      to={link || ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-8 pt-4 shadow-lg z-10 relative bg-card col-start-1 row-start-1">
        <div
          className={`mx-auto z-10 relative overflow-hidden flex flex-col place-content-around gap-4 max-h-[400px]`}
        >
          {title && (
            <div className="grid relative">
              <p className={`${previewTitleClasses}`}>{title}</p>
            </div>
          )}
          {media && <MediaContent media={media} isHovered={isHovered} />}
          {subtitle}
        </div>
      </div>
      <div className="col-start-1 row-start-1 z-10 bottom-0 absolute bg-gradient-to-t from-gray-50 w-full h-[150px] place-content-center"></div>
    </Link>
  );
};
