import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -150, 
      });
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
