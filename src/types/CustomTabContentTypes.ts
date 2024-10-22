export interface CustomTabContentProps {
  content: React.ReactNode;
  sourceCode?: string;
  title?: string;
  dimensions?: string[];
  activeService: string;
  setActiveService: React.Dispatch<React.SetStateAction<string>>;
}