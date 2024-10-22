import { linkClasses } from "@/types/TabContentTypes";
import { Link } from "react-router-dom";

interface LinkWrapperProps {
  url: string;
  text?: string;
  newTab?: boolean;
}

interface IntraSiteLinkWrapperProps {
  urlSuffix: string;
  text?: string;
  newTab?: boolean;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({ url, text="here", newTab=true }) => {
  return (
    <a 
    className={`${linkClasses}`}
    href={url}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  )
}

export const IntraSiteLinkWrapper: React.FC<IntraSiteLinkWrapperProps> = ({ urlSuffix, text="here", newTab=false }) => {
  return (
    <Link
    className={`${linkClasses}`}
    to={urlSuffix}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  )
}