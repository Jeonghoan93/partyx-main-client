import { create } from "zustand";

interface FinishRegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFinishRegisterModal = create<FinishRegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFinishRegisterModal;
