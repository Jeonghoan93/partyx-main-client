import { useEffect, useState } from "react";

const useModalState = (isOpen: boolean) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return [showModal, setShowModal] as const;
};

export default useModalState;
