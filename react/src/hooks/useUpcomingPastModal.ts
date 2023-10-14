import { create } from "zustand";

interface UpcomingPastModalStore {
  isOpen: boolean;
  mode: "upcoming" | "past";
  onOpen: (mode: "upcoming" | "past") => void;
  onClose: () => void;
}

const UpcomingPastModal = create<UpcomingPastModalStore>((set) => ({
  isOpen: false,
  mode: "upcoming",
  onOpen: (mode) => set({ isOpen: true, mode: mode }),
  onClose: () => set({ isOpen: false }),
}));

export default UpcomingPastModal;
