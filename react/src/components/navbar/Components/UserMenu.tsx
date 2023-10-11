import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCreateProfileModal from "src/hooks/useCreateProfile";
import useLoginModal from "src/hooks/useLoginModal";
import useRegisterModal from "src/hooks/useRegisterModal";
import useRentModal from "src/hooks/useRentModal";
import useOnClickOutside from "src/hooks/userOnClickOutside";
import { User } from "src/interfaces/user";
import { logout } from "src/services/auth";
import Avatar from "../../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const createProfileModal = useCreateProfileModal();

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
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col p-1 cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  semibold={true}
                  label="Messages"
                  onClick={() => navigate("/account/messages/:userId")}
                />
                <MenuItem
                  semibold={true}
                  label="Notifications"
                  onClick={() => navigate("/notifications")}
                />
                <MenuItem
                  semibold={true}
                  label="Tickets"
                  onClick={() => navigate("/account/activity")}
                />
                <MenuItem
                  semibold={true}
                  label="Favorites"
                  onClick={() => navigate("/account/favorites")}
                />
                <hr />
                <MenuItem
                  label="Account"
                  onClick={() => navigate("/account")}
                />
                <MenuItem
                  label="My events"
                  onClick={() => navigate("/my-events")}
                />
                <MenuItem label="List your party" onClick={rentModal.onOpen} />

                <hr />
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Enterprise"
                    onClick={() => navigate("/enterprise")}
                  />
                  <MenuItem
                    label="Profile"
                    onClick={createProfileModal.onOpen}
                  />
                </div>
                <div
                  className="
                  block
                  md:hidden
                "
                >
                  <MenuItem label="Home" onClick={() => navigate("/")} />
                </div>
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
                <hr className="block lg:hidden" />
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
                    label="Enterprise"
                    onClick={() => navigate("/enterprise")}
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
