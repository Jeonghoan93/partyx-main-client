import { create } from "zustand";

interface CreateProfileModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateProfileModal = create<CreateProfileModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateProfileModal;
