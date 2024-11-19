import React from "react";
import { titleClasses } from "@/types/TabContentTypes";
import { CustomTabContentProps } from "./types/CustomTabContentTypes";

export const CustomTabContent: React.FC<CustomTabContentProps> = ({ title, content, sourceCode }) => {
  return (
    <div className={`p-4 pt-8 md:p-12 xl:p-20 mx-auto  z-10 relative overflow-x-hidden flex flex-col place-content-around gap-4`}>

      {title && 
        <div className="grid relative ">
          <p className={`${titleClasses}`}>{title}</p>
        </div>
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