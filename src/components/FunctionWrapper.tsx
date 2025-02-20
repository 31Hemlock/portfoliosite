import {
  clickableFunctionClasses,
  functionClasses,
} from '@/types/TabContentTypes'

interface FunctionWrapperProps {
  text: string
  url?: string
  newTab?: boolean
}

export const FunctionWrapper: React.FC<FunctionWrapperProps> = ({
  text,
  url = '',
  newTab = true,
}) => {
  if (url) {
    return (
      <a
        href={url}
        className={clickableFunctionClasses}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {text}
      </a>
    )
  } else {
    return <span className={functionClasses}>{text}</span>
  }

  // return (
  //   <span className={url ? clickableFunctionClasses : functionClasses}>{text}</span>
  // )
}
