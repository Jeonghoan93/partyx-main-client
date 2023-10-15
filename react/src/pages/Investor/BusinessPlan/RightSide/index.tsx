import DateTeam from "./Cards/DateTeam";
import DiscussMore from "./Cards/DiscussMore";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <DiscussMore />
      <DateTeam />
    </section>
  );
};

export default RightSide;
