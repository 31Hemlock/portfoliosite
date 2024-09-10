export interface Section {
  title: string;
  titleStyle: titleStyle
  content: React.ReactNode[];
}

export interface Media {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export type titleStyle = "header" | "body"

export type TabContentData = {
  media: Media;
  sections: Array<Section>;
  title: string;
  sourceCode?: string;
};