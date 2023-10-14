import AddVideo from "./Cards/AddVideo";
import CompleteProfile from "./Cards/CompleteProfile";
import FriendsList from "./Cards/FriendsList";
import UpgradeCard from "./Cards/UpgradeCard";
import VerifyId from "./Cards/VerifyId";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <UpgradeCard />
      <CompleteProfile />
      <AddVideo />
      <VerifyId />
      <FriendsList />
    </div>
  );
};

export default LeftSide;
