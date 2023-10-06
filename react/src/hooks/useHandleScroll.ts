import { useEffect, useState } from "react";

const useHandleScroll = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
        // If user is at the very top, always show the navbar and footer
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
  }, [lastScrollPos]);

  return hideNav;
};

export default useHandleScroll;
