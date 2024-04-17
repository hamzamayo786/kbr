import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // This hook returns the location object that represents the current URL.

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // This effect will run when the pathname changes.

  return null; // This component does not render anything.
};

export default ScrollToTop;
