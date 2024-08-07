import React from "react";
import { Section, Media } from "@/types/TabContentTypes";



interface TabContentProps {
  media?: Media;
  sections: Section[];
  sourceCode?: string;
}

const titleStyles = {
  header: "font-semibold text-center text-3xl mb-4 pt-6",
  body: "font-normal text-left text-xl mb-2",
};

const SectionTitle: React.FC<{ titleStyle: "header" | "body"; children: React.ReactNode }> = ({ titleStyle, children }) => {
  return <h2 className={titleStyles[titleStyle]}>{children}</h2>;
};

const MediaContent: React.FC<{ media: Media }> = ({ media }) => {
  if (media.type === 'image') {
    return <img src={media.src} alt={media.alt} className="w-full h-auto mb-4" />;
  } else {
    return <video src={media.src} controls className="w-full mb-4" />;
  }
};

export const TabContent: React.FC<TabContentProps> = ({ media, sections, sourceCode }) => {
  return (
    <div className="mx-auto p-12 lg:p-20">
      {media && 
        <MediaContent media={media} />
      }
      
      {sections.map((section, index) => (
        <div key={index} className="mb-6 bg-white px-12 py-6 shadow-lg">
          <SectionTitle titleStyle={section.titleStyle}>{section.title}</SectionTitle>
          <div className="border border-b border-black"/>
          <div className="prose prose-lg py-8">{section.content}</div>
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