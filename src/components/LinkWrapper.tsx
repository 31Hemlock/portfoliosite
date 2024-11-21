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

interface PreviewLinkWrapperProps {
  className: string;
  urlSuffix: string;
  newTab?: boolean;
  children: React.ReactNode;
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

export const IntraSiteLinkWrapper: React.FC<IntraSiteLinkWrapperProps> = ({
  urlSuffix,
  text = "here",
  newTab = false,
}) => {
  const basePath = "/portfoliosite";
  const fullPath = `${basePath}/${urlSuffix.replace(/^\//, "")}`;

  return (
    <Link
      className={linkClasses}
      to={fullPath}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  );
};

export const PreviewLinkWrapper: React.FC<PreviewLinkWrapperProps> = ({
  className,
  urlSuffix,
  newTab,
  children
}) => {
  const basePath = "/portfoliosite";
  const fullPath = `${basePath}/${urlSuffix.replace(/^\//, "")}`;
  return (
    <Link
    className={`${className}`}
    to={fullPath}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
  >
    {children}
  </Link>
  )
}