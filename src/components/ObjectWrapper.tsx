import { clickableObjectClasses, objectClasses } from "@/types/TabContentTypes";

interface ObjectWrapperProps {
  text: string;
  url?: string;
  newTab?: boolean;
}


export const ObjectWrapper: React.FC<ObjectWrapperProps> = ({text, url = "", newTab=true}) => {
  if (url) {
    return (
      <a 
      href={url} 
      className={clickableObjectClasses}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    )
  } else {
      return (
        <span className={objectClasses}>{text}</span>
      )
    }
}