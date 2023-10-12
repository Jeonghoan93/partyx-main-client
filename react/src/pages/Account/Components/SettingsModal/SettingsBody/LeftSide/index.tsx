import AccountSettings from "./Cards/AccountSettings";
import FriendsList from "./Cards/FriendsList";
import VerifyId from "./Cards/VerifyId";

const LeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <AccountSettings />
        <VerifyId />
        <FriendsList />
      </div>
    </>
  );
};

export default LeftSide;
