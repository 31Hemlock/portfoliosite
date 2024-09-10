import React from "react";
import { Section, Media } from "@/types/TabContentTypes";
import flair from "./assets/img/kr6.png";

interface TabContentProps {
  media?: Media;
  sections: Section[];
  sourceCode?: string;
  title?: string;
}

const titleStyles = {
  header: "font-semibold text-center text-3xl mb-4 pt-6",
  body: "font-medium text-left text-2 xl mb-2",
};

const SectionTitle: React.FC<{ titleStyle: "header" | "body"; children: React.ReactNode }> = ({ titleStyle, children }) => {
  return <h2 className={titleStyles[titleStyle]}>{children}</h2>;
};

const MediaContent: React.FC<{ media: Media }> = ({ media }) => {
  if (media.type === 'image') {
    return <img src={media.src} alt={media.alt} className="w-full h-auto mb-6 z-10 relative" />;
  } else {
    return <video src={media.src} autoPlay controls className="w-full mb-4 z-10 relative" />;
  }
};

export const TabContent: React.FC<TabContentProps> = ({ media, title, sections, sourceCode }) => {
  return (
    <div className="mx-auto p-8 md:p-12 lg:p-20 z-10 relative">
      <div className="grid relative">
        <h1 className="text-center mb-6 z-10">{title}</h1>
        {title && <img src={flair} className="absolute mx-auto z-0 -mt-12 justify-self-center scale-125 opacity-90"/>}
      </div>
      {media && 
        <MediaContent media={media} />
      }
      
      {sections.map((section, index) => (
        <div key={index} className="mb-6 bg-white px-12 py-6 shadow-lg z-10 relative">
          <SectionTitle titleStyle={section.titleStyle}>{section.title}</SectionTitle>
          <div className="border-b border-black mb-4"/>
          {section.content.map((paragraph, index) => {
            return <div key={index} className="prose prose-lg pt-4 pb-4">{paragraph}</div>;
          })}
        </div>
      ))}
      
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