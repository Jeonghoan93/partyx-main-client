import { BiHomeAlt2 } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { PiBoundingBoxLight } from "react-icons/pi";
import Logo from "../navbar/Components/Logo";

const SideBar: React.FC = () => {
  return (
    <div className="hidden md:block fixed h-full bg-white z-10 shadow-sm">
      <div
        className="
          p-5
          border-l-[1px]
        "
      >
        <div
          className="
            flex 
            flex-col 
            items-center 
            gap-10
          "
        >
          <div className="p-4 flex flex-col items-center gap-5">
            <Logo />

            <span>List your party</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row p-1 items-center gap-3 cursor-pointer">
              <span>
                <BiHomeAlt2 size={23} />
              </span>
              <span className="font-light text-[11pt]">Home</span>
            </div>
            <div className="flex flex-row p-1 items-center gap-3 cursor-pointer">
              <span>
                <PiBoundingBoxLight size={23} />
              </span>
              <span className="font-light text-[11pt]">Listings</span>
            </div>
            <div className="flex flex-row p-1 items-center gap-3 cursor-pointer">
              <span>
                <BsPeople size={23} />
              </span>
              <span className="font-light text-[11pt]">Guests</span>
            </div>
            <div className="flex flex-row p-1 items-center gap-3 cursor-pointer">
              <span>
                <CiBoxes size={23} />
              </span>
              <span className="font-light text-[11pt]">Manage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
