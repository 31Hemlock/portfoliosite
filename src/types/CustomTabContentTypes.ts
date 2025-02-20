export interface CustomTabContentProps {
  content: React.ReactNode
  sourceCode?: string
  title?: string
  subtitle?: string
  dimensions?: string[]
  activeService: string
  setActiveService: React.Dispatch<React.SetStateAction<string>>
  link?: string
}
