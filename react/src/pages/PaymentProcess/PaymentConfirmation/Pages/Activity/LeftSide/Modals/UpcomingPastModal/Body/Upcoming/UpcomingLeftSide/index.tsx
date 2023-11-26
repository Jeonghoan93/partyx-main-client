import UpcomingEventsList from "./Cards/UpcomingEventsList";

const UpcomingLeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <UpcomingEventsList />
      </div>
    </>
  );
};

export default UpcomingLeftSide;
