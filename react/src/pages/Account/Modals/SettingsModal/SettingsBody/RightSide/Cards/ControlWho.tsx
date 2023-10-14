import LineContainer from "src/components/LineContainer";
import Toggle from "src/components/Toggle";

const ControlWho = () => {
  return (
    <LineContainer>
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Control who messages you
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Verified members</span>
            </div>

            <span className="text-gray-400 text-[10pt]">
              Only ID verified members can message you.
            </span>
          </div>

          <Toggle id={"Control"} onToggle={() => {}} />
        </div>
      </div>
    </LineContainer>
  );
};

export default ControlWho;
