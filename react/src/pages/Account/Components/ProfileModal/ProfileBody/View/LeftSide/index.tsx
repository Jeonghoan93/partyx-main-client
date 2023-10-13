import ConnectedAccounts from "./Cards/ConnectedAccounts";
import Notifications from "./Cards/Notifications";
import PhoneEmail from "./Cards/PhoneEmail";
import PhotosVideos from "./Cards/PhotosVideos";
import Subscription from "./Cards/Subscription";

const ViewLeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <PhotosVideos />
        <PhoneEmail />
        <Notifications />
        <Subscription />
        <ConnectedAccounts />
      </div>
    </>
  );
};

export default ViewLeftSide;
