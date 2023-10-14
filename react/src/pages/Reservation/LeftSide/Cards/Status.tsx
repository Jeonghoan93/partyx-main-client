import { BsCheckLg } from "react-icons/bs";
import LineContainer from "src/components/LineContainer";

const Status = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">Status</span>
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row items-center gap-1">
            <span className="font-bold text-[11pt] text-green-700">
              Confirmed
            </span>
            <span className="border-[1px] rounded-full bg-green-100">
              <BsCheckLg size={14} />
            </span>
          </div>

          <span className="text-gray-600 font-semibold text-[10pt]">
            You are ready to go!
          </span>
        </div>
      </section>
    </LineContainer>
  );
};

export default Status;
