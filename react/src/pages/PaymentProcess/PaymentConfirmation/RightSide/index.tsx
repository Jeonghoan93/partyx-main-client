import DownloadTicketCard from "./Cards/DownloadTicketCard";
import QualityPromiseCard from "./Cards/QualityPromiseCard";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <DownloadTicketCard />
      <QualityPromiseCard />
    </section>
  );
};

export default RightSide;
