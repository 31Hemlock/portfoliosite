import React, { useState, useRef, useEffect } from "react";
import { Media } from "@/types/TabContentTypes";
import { titleClasses } from "@/types/TabContentTypes";
import { BaseMedia } from "@/types/TabContentTypes";

interface TabContentProps {
  media?: Media;
  content: React.ReactNode;
  sourceCode?: string;
  title?: string;
  dimensions?: string[];
  videoHQ: boolean;
  setVideoHQ: React.Dispatch<React.SetStateAction<boolean>>;
}

const MediaContent: React.FC<{ media: Media, videoHQ: boolean, setVideoHQ: React.Dispatch<React.SetStateAction<boolean>> }> = ({ media, videoHQ, setVideoHQ }) => {
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Hover state
  const [isFadingIn, setIsFadingIn] = useState(false); // Handles opacity transition
  const videoRef = React.useRef<HTMLVideoElement | null>(null); // Ref to track video element
  let aspectRatio = null;

  useEffect(() => {
    // Trigger the fade-in effect every time the media changes
    setIsFadingIn(false); // Reset opacity to 0
    const timeout = setTimeout(() => {
      setIsFadingIn(true); // Enable opacity transition after a short delay
    }, 200); // Short delay to ensure transition applies

    return () => {
      clearTimeout(timeout); // Clean up timeout on unmount
    };
  }, [media]); // Run effect whenever media prop changes

  // Type guard for BaseMedia
  const isBaseMedia = (media: Media): media is BaseMedia => "dims" in media;

  if (isBaseMedia(media) && media.dims?.w && media.dims?.h) {
    aspectRatio = (media.dims.w / media.dims.h) * 100;
  }

  const handleQualityChange = () => {
    console.log("Registered quality change click")
    console.log("Setting value to " + !videoHQ)
    setVideoHQ(!videoHQ);

    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime; // Get the current playback time
      const wasPlaying = !videoRef.current.paused;

      // Update the video source
      if (isBaseMedia(media)) {
        const newSrc = videoHQ ? media.src : media.lqsrc;
        if (newSrc) {
          videoRef.current.src = newSrc;
          videoRef.current.onloadeddata = () => {
            if (videoRef.current) {
              videoRef.current.currentTime = currentTime;
              if (wasPlaying) {
                videoRef.current.play();
              }
            }
          };
        }
      }
    }
  };

  if (media.type === "video" && (media.src || media.lqsrc)) {
    return (
      <div
        className="w-full relative z-10"
        style={{ paddingBottom: aspectRatio ? `${aspectRatio}%` : "56.25%" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Button */}
        <div
          className={`absolute top-2 right-2 flex items-center z-20 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => handleQualityChange()}
            />
            <div
              className={`w-16 h-8 flex items-center rounded-md relative transition-colors duration-300 ${
                videoHQ ? "bg-red-500" : "bg-blue-500"
              }`}
            >
              {/* LQ */}
              <span
                className={`absolute left-1 px-1 py-0.5 text-xs font-bold rounded text-white select-none ${
                  videoHQ ? "opacity-50" : "opacity-100"
                }`}
              >
                LQ
              </span>
              {/* Knob */}
              <div
                className={`absolute w-8 h-8 bg-white rounded-md shadow-md transition-transform transform ${
                  videoHQ ? "translate-x-0" : "translate-x-[32px]"
                }`}
              ></div>
              {/* HQ */}
              <span
                className={`absolute right-1 px-1 py-0.5 text-xs font-bold rounded text-white select-none ${
                  videoHQ ? "opacity-100" : "opacity-50" 
                }`}
              >
                HQ
              </span>
            </div>
          </label>
        </div>

        {/* Video */}
        <img className="absolute" src={media.poster} />
        <video
          ref={videoRef}
          src={videoHQ ? media.src : media.lqsrc || undefined}
          autoPlay
          controls
          muted
          poster={media.poster}
          className={`absolute top-0 left-0 w-full h-full object-cover shadow-md transition-opacity duration-200 ease-in ${
            isFadingIn ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    );
  }

  return null;
};

export const TabContent: React.FC<TabContentProps> = ({ media, title, content, sourceCode, videoHQ, setVideoHQ }) => {
  return (
    <div className={`p-4 md:p-12 xl:p-20 mx-auto z-10 relative overflow-x-hidden flex flex-col place-content-around gap-4`}>
      {title && 
      
        <div className="grid relative ">
          <p className={`${titleClasses}`}>{title}</p>
          {/* {title && 
          <img src={flair} 
          className="absolute mx-auto z-0 -mt-12 justify-self-center scale-125 opacity-100 max-w-full"
          // style={{
          //   filter: "sepia(100%) hue-rotate(220deg) saturate(500%) brightness(1)"
          // }}
          />} */}
        </div>
      }
      {media && 
        <MediaContent key={media.id} media={media} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>
      }

      {content}
      
      
      {sourceCode && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Source Code</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{sourceCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};