import { useEffect, useState } from 'react'

export const useSidebarMaxWidth = (): string => {
  const [maxWidth, setMaxWidth] = useState('100%')

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth
      if (width >= 1280) setMaxWidth('400px')
      else if (width >= 1024) setMaxWidth('325px')
      else if (width >= 768) setMaxWidth('300px')
      else setMaxWidth('100%')
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return maxWidth
}
