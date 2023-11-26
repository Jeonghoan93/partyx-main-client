import { useNavigate } from "react-router-dom";
import QualityPromiseCard from "./Cards/QualityPromiseCard";

const RightSide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3">
      <QualityPromiseCard />
    </section>
  );
};

export default RightSide;
