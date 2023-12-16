import { FcFlashOn, FcOvertime } from "react-icons/fc";
import LineContainer from "src/components/LineContainer";
import BulletCard from "src/pages/EventDetail/Components/BulletCard";

interface NameDescProps {
  title: string;
  desc: string;
  startDate: Date;
}

const NameDesc: React.FC<NameDescProps> = ({ title, desc, startDate }) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-4">
        <BulletCard title="Few tickets left" icon={<FcFlashOn size={20} />} />

        <BulletCard
          title="Only 22 hours left to book"
          icon={<FcOvertime size={20} />}
        />

        <div className="flex flex-col gap-1">
          <span className="text-[12pt] text-neutral-700 font-bold">Feb</span>

          <span className="text-[20pt] font-extrabold leading-tight">
            {title}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11pt] font-semibold">{desc}</span>
        </div>
      </section>
    </LineContainer>
  );
};

export default NameDesc;
