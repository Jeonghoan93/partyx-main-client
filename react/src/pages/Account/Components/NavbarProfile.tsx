import { AiOutlineEdit, AiOutlineSetting } from "react-icons/ai";
import { TbCircuitChangeover } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import useSettingsModal from "src/hooks/useSettingsModal";

const NavbarProfile: React.FC = () => {
  const currentUser = useCurrentUser();
  const LoginModal = useLoginModal();
  const navigate = useNavigate();

  const settingsModal = useSettingsModal();

  return (
    <div className="fixed z-10 w-full bg-white">
      <div
        className="
          p-4 
        "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <span
              onClick={
                currentUser ? () => alert("Not yet!") : LoginModal.onOpen
              }
              className="cursor-pointer shadow-sm rounded-full border-[1px] border-neutral-100 "
            >
              {" "}
              <img
                className="rounded-full"
                height="50"
                width="50"
                alt="Avatar"
                src={currentUser?.img || "/images/placeholder.jpg"}
              />
            </span>

            <div className="flex flex-col">
              <span
                onClick={() => navigate("/account")}
                className="cursor-pointer text-[16pt] font-bold"
              >
                {currentUser ? currentUser.name : "Account"}
              </span>

              {currentUser ? (
                <div className="flex flex-row gap-1 text-[11pt] text-gray-600 font-normal">
                  <span className="font-bold">{currentUser.name}</span>·
                  <span>{currentUser.email}</span>·
                  <span className="underline cursor-pointer font-semibold">
                    Go to profile
                  </span>
                </div>
              ) : (
                <span
                  onClick={LoginModal.onOpen}
                  className="cursor-pointer font-semibold underline text-[10pt]"
                >
                  Login to see
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <span className="cursor-pointer">
              <AiOutlineEdit size={25} />
            </span>
            <span className="cursor-pointer">
              <TbCircuitChangeover size={25} />
            </span>
            <span onClick={settingsModal.onOpen} className="cursor-pointer">
              <AiOutlineSetting size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
