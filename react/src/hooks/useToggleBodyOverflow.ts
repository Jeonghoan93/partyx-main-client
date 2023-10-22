import { useEffect } from "react";

const useToggleBodyOverflow = (isOpen: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    // Cleanup: Set the overflow back to its original value if the component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
};

export default useToggleBodyOverflow;
