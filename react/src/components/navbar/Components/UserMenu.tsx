import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useLoginModal from "src/hooks/useLoginModal";
import useRegisterModal from "src/hooks/useRegisterModal";
import useRentModal from "src/hooks/useRentModal";
import useOnClickOutside from "src/hooks/userOnClickOutside";
import { SafeUser } from "src/interfaces/user";
import { logout } from "src/services/auth";
import Avatar from "../../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  useOnClickOutside([menuRef], () => setIsOpen(false));

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  const handleSignOut = async () => {
    try {
      await logout();

      toast.success("Logged out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            lg:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          List your party
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.img} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[40vw]
            lg:w-3/4 
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
                  label="My reservations"
                  onClick={() => navigate("/reservations")}
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

                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="List your party"
                    onClick={currentUser ? rentModal.onOpen : loginModal.onOpen}
                  />
                </div>
                <hr />
                <div
                  className="
                  block
                  md:hidden
                "
                >
                  <MenuItem label="Home" onClick={() => navigate("/")} />
                </div>
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Company"
                    onClick={() => navigate("/company")}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
