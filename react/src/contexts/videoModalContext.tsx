// modalContext.tsx
import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextType {
  isVisible: boolean;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider value={{ isVisible, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
