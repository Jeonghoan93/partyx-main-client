import { BsCheckLg } from "react-icons/bs";
import LineContainer from "src/components/LineContainer";

const PhoneEmail = () => {
  return (
    <LineContainer>
      <div className="pb-6">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Phone & Email
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
            <span>+46 072 446 29 42</span>
            <span className="bg-neutral-200 border-neutral-100 rounded-full">
              <BsCheckLg size={12} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
            <span>zldwkd93@gmail.com</span>
            <span className="bg-neutral-200 border-neutral-100 rounded-full">
              <BsCheckLg size={12} />
            </span>
          </div>

          <span className="font-bold cursor-pointer hover:underline">Edit</span>
        </div>
      </div>
    </LineContainer>
  );
};

export default PhoneEmail;
