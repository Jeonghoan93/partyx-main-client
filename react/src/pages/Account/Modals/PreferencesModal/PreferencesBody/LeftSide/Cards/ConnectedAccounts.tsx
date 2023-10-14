import LineContainer from "src/Components/LineContainer";
import Toggle from "src/Components/Toggle";

const ConnectedAccounts = () => {
  return (
    <LineContainer>
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Connected Accounts
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Apple</span>
            </div>
          </div>

          {/* Replace Chevron with Toggle */}
          <Toggle id={"Apple"} onToggle={() => {}} />
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Facebook</span>
            </div>
          </div>

          {/* Replace Chevron with Toggle */}
          <Toggle id={"Facebook"} onToggle={() => {}} />
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Instagram</span>
            </div>
          </div>

          {/* Replace Chevron with Toggle */}
          <Toggle id={"Instagram"} onToggle={() => {}} />
        </div>
      </div>
    </LineContainer>
  );
};

export default ConnectedAccounts;
