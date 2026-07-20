import { useEffect, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
  scrollTargetRef: RefObject<HTMLDivElement | null>
}

export const ScrollToTop = ({ scrollTargetRef }: ScrollToTopProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollTargetRef.current?.scrollTo(0, 0)
  }, [pathname, scrollTargetRef])

  return null
}

export default ScrollToTop
