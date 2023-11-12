import Past from "./Sections/Past";
import Upcoming from "./Sections/Upcoming";

const Left: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <Upcoming />
      <Past />
    </div>
  );
};

export default Left;
