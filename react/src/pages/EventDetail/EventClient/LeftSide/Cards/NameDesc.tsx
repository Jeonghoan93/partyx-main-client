import { FcOvertime } from "react-icons/fc";
import LineContainer from "src/components/LineContainer";

interface NameDescProps {
  title: string;
  desc: string;
}

const NameDesc: React.FC<NameDescProps> = ({ title, desc }) => {
  return (
    <LineContainer>
      <section className="">
        <div className="mb-2">
          <span className="text-[17pt] font-extrabold">{title}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11pt]">{desc}</span>
        </div>

        <hr className="my-2" />

        <div className="flex flex-row justify-between items-center">
          <span className="text-[11pt]" style={{ maxWidth: "330px" }}>
            <span className="font-semibold">Only 22 hours left to book.</span>{" "}
            The host will stop accepting bookings for your dates soon.
          </span>

          <span>
            <FcOvertime size={25} />
          </span>
        </div>
      </section>
    </LineContainer>
  );
};

export default NameDesc;
