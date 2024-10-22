import { useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  scrollTargetRef: RefObject<HTMLDivElement>
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollTargetRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollTargetRef && scrollTargetRef.current) {
      scrollTargetRef.current.scrollTo(0, 0);
    }
  }, [pathname, scrollTargetRef]);

  return null;
}

export default ScrollToTop;
