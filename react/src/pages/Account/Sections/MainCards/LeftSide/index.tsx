import AddVideo from "./Components/AddVideo";
import FriendsList from "./Components/FriendsList";
import UpgradeCard from "./Components/UpgradeCard";

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
