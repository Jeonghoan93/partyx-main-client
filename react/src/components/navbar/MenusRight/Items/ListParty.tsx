import { useCallback } from "react";

import useLoginModal from "src/hooks/useLoginModal";
import useRentModal from "src/hooks/useRentModal";
import { User } from "src/interfaces/user";

interface ListPartyProps {
  currentUser?: User | null;
}

const ListParty: React.FC<ListPartyProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div
      onClick={onRent}
      className="
            py-2
            px-3
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
    >
      <span className="underline font-bold text-[11pt]">List your party</span>
    </div>
  );
};

export default ListParty;
