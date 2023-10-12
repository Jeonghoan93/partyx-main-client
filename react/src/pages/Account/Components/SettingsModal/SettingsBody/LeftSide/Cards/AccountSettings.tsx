import { AiOutlineRight } from "react-icons/ai";

const AccountSettings = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border-[1px] border-neutral-200 shadow">
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-800">
          ACCOUNT SETTINGS
        </span>
      </div>

      <div className="flex flex-col gap-3 text-gray-800 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <span>Phone number</span>
          <div className="flex flex-row gap-1 items-center hover:underline cursor-pointer">
            <span>0724462942</span>
            <span>
              <AiOutlineRight color={"gray"} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <span>Contacted accounts</span>
          <div className="flex flex-row gap-1 items-center hover:underline cursor-pointer">
            <span>3</span>
            <span>
              <AiOutlineRight color={"gray"} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <span>Email</span>
          <div className="flex flex-row gap-1 items-center hover:underline cursor-pointer">
            <span>zldwkd93@gmail.com</span>
            <span>
              <AiOutlineRight color={"gray"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
