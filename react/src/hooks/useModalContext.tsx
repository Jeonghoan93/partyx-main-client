import { useContext } from "react";
import { ModalContext } from "src/contexts/modalContext";

interface ModalContextType {
  isVisible: boolean;
  closeModal: () => void;
}

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
