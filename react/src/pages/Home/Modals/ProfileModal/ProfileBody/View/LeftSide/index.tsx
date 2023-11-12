import AboutMe from "./Cards/AboutMe";
import ConnectedAccounts from "./Cards/ConnectedAccounts";
import Notifications from "./Cards/Notifications";
import ProfilePhotoCard from "./Cards/ProfilePhotoCard";
import Subscription from "./Cards/Subscription";

const ViewLeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <ProfilePhotoCard />
        <AboutMe />
        <Notifications />
        <Subscription />
        <ConnectedAccounts />
      </div>
    </>
  );
};

export default ViewLeftSide;
