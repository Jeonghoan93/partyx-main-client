import Notifications from "./Cards/Notifications";
import PhoneEmail from "./Cards/PhoneEmail";
import Safety from "./Cards/Safety";
import Subscription from "./Cards/Subscription";

const LeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <Safety />
        <PhoneEmail />
        <Notifications />
        <Subscription />
      </div>
    </>
  );
};

export default LeftSide;
