import AddVideo from "./Cards/AddVideo";
import FriendsList from "./Cards/FriendsList";
import UpgradeCard from "./Cards/UpgradeCard";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <UpgradeCard />
      <AddVideo />
      <FriendsList />
    </div>
  );
};

export default LeftSide;
