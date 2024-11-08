import React from "react";
import { Media } from "@/types/TabContentTypes";
import { titleClasses } from "@/types/TabContentTypes";
import { useState } from "react";


interface TabContentProps {
  media?: Media;
  content: React.ReactNode;
  sourceCode?: string;
  title?: string;
  dimensions?: string[]
}

const MediaContent: React.FC<{ media: Media }> = ({ media }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  let aspectRatio = null;

  if (media.dims && media.dims.w && media.dims.h) {
    aspectRatio = (media.dims.w / media.dims.h) * 100;
  }


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
          src={media.src}
          autoPlay
          controls
          muted
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


export const TabContent: React.FC<TabContentProps> = ({ media, title, content, sourceCode }) => {
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
        <MediaContent media={media}/>
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