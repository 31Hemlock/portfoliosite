export interface Section {
  title: string;
  titleStyle: "header" | "body";
  content: React.ReactNode;
}

export interface Media {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export type TabContentData = {
  media: Media;
  sections: Array<{
      title: string;
      titleStyle: "header" | "body";
      content: React.ReactNode;
  }>;
  sourceCode?: string;
};