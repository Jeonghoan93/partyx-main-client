import { GrSecure } from "react-icons/gr";
import LineContainer from "src/components/LineContainer";

const Security = () => {
  return (
    <LineContainer>
      <div
        onClick={() => alert("Not yet")}
        className="flex flex-row items-center gap-4 cursor-pointer"
      >
        <span>
          <GrSecure size={28} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[12pt] font-bold">Login & Security</span>
          <span className="text-[9pt] font-semibold text-gray-700">
            Change password, set up 2FA and more.
          </span>
        </div>
      </div>
    </LineContainer>
  );
};

export default Security;
