type dims = {h: number; w: number;}

export interface Media {
  type: 'image' | 'video' | 'aws';
  src?: string;
  alt?: string;
  dims?: dims;
}

export type titleStyle = "header" | "body"

export interface TabContentData {
  media?: Media;
  content: React.ReactNode;
  title?: string;
  sourceCode?: string;
};

// Styles
export const titleClasses = "font-medium text-center text-4xl md:text-5xl"
export const mainHeaderClasses = "font-semibold text-center text-3xl mb-4 pt-6"
export const leftMainHeaderClasses = "font-semibold text-xl mb-4 pt-4"
export const sourceCodeClasses = "font-semibold text-xl mb-4 pt-4"
export const secondaryHeaderClasses = "font-medium text-left text-2xl mb-2"
export const divider = <div className="border-b border-black mb-4"/>
export const thinDivider = <div className="border-b border-grey mb-4"/>
export const subheaderDivider = <div className="border-b border-grey"/>
export const paragraphClasses = "prose prose-lg pt-4 pb-4"
export const linkClasses = "text-blue-400 visited:text-purple-500 cursor-pointer"
