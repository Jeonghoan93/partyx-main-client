import { GrSecure } from "react-icons/gr";

const Security = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
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
    </div>
  );
};

export default Security;
