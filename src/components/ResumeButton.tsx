import { buttonClasses } from '@/types/TabContentTypes'
import { Link } from 'react-router-dom'

interface ButtonProps {
  text: string
  download?: boolean
  url: string
  newTab?: boolean
}

export const ResumeButton: React.FC<ButtonProps> = ({
  text,
  download = false,
  url,
  newTab = false,
}) => {
  const fullPath = `/${url.replace(/^\//, '')}`

  // Download .pdf
  if (download) {
    return (
      <a
        className={buttonClasses}
        href={url}
        download
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        <button className={buttonClasses}>{text}</button>
      </a>
    )
  }

  // Internal site navigation
  return (
    <Link
      className={buttonClasses}
      to={fullPath}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      <button className={buttonClasses}>{text}</button>
    </Link>
  )
}
