import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";

const NavbarProfile: React.FC = () => {
  const currentUser = useCurrentUser();
  const LoginModal = useLoginModal();

  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div
        className="
          p-4 
          border-b-[1px]
          border-b-neutral-100
        "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[18pt] font-bold mb-1">
              {currentUser ? currentUser.name : "Account"}
            </span>

            {currentUser ? (
              <div className="flex flex-row gap-1 text-[12pt] text-gray-600 font-normal">
                <span className="font-bold">{currentUser.name}</span>·
                <span>{currentUser.email}</span>·
                <span className="underline cursor-pointer font-semibold">
                  Go to profile
                </span>
              </div>
            ) : (
              <span
                onClick={LoginModal.onOpen}
                className="cursor-pointer underline"
              >
                Login to see your account!
              </span>
            )}
          </div>

          <span className="shadow-sm rounded-full border-[1px] border-neutral-100 ">
            {" "}
            <img
              className="rounded-full"
              height="50"
              width="50"
              alt="Avatar"
              src={currentUser?.img || "/images/placeholder.jpg"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
