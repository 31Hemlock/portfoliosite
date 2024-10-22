
interface ContentCardProps {
  children: React.ReactNode
}

export const ContentCard: React.FC<ContentCardProps> = ({ children }) => {
  return (
    <div className="px-8 sm:px-12 py-6 shadow-lg z-10 relative bg-card">
      {children}
    </div>
  )
}
