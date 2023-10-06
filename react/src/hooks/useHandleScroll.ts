import { useEffect, useState } from "react";

const useHandleScroll = (threshold = 160) => {
  // 60px assumed as navbar height
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= threshold) {
        // If user has not scrolled past the mobile navbar height, always show the navbar and footer
        setHideNav(false);
      } else if (currentScrollPos > lastScrollPos) {
        // User is scrolling down
        setHideNav(true);
      } else {
        // User is scrolling up
        setHideNav(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, threshold]);

  return hideNav;
};

export default useHandleScroll;
