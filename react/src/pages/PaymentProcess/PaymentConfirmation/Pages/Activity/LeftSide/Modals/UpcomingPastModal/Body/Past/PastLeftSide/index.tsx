import PastEventsList from "./Cards/PastEventsList";

const PastLeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <PastEventsList />
      </div>
    </>
  );
};

export default PastLeftSide;
