import { useState } from "react";

import useLoginModal from "src/hooks/useLoginModal";
import useRegisterModal from "src/hooks/useRegisterModal";
import useRentModal from "src/hooks/useRentModal";
import { User } from "src/interfaces/user";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useSearchModal from "src/hooks/useSearchModal";
import { logout } from "src/services/auth";
import MenuItem from "./MenuItem";

import { BiSearch } from "react-icons/bi";

interface MainMenuProps {
  currentUser?: User | null;
}

const MainMenu: React.FC<MainMenuProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const searchModal = useSearchModal();

  const [isOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative ml-6">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={searchModal.onOpen}
          className="
            hidden
            lg:block
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          <div className="flex flex-row items-center gap-2">
            <span>
              <BiSearch size={16} />
            </span>
            <span>Search</span>
          </div>
        </div>

        <div
          onClick={() => navigate("/enterprise")}
          className="
            hidden
            lg:block
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Enterprise
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My tickets"
                  onClick={() => navigate("/tickets")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => navigate("/favorites")}
                />
                <MenuItem
                  label="My bookings"
                  onClick={() => navigate("/bookings")}
                />
                <MenuItem
                  label="My events"
                  onClick={() => navigate("/events")}
                />
                <MenuItem label="List your party" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={handleSignOut} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
