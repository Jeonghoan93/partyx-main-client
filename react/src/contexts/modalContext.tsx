import { ReactNode, createContext, useState } from "react";

interface ModalContextType {
  isVisible: boolean;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

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
