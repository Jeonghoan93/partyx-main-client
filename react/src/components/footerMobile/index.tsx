import {
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import useHandleScroll from "src/hooks/useHandleScroll";

function FooterMobile() {
  const hideNav = useHandleScroll();

  return (
    <div
      style={{ height: "65px" }}
      className={`border-t-[1px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 ${
        hideNav ? "translate-y-full" : ""
      }`}
    >
      <div className="flex justify-around items-center h-full px-4">
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => alert("not yet!")}
        >
          <span>
            <BsSearch size={18} />
          </span>
          <span className="text-[10pt] font-semibold">Search</span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => alert("not yet!")}
        >
          <span>
            <AiOutlineHeart size={18} />
          </span>
          <span className="text-[10pt] font-semibold">Favorites</span>
        </div>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => alert("not yet!")}
        >
          <span>
            <AiOutlineCalendar size={18} />
          </span>
          <span className="text-[10pt] font-semibold">Booking</span>
        </div>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => alert("not yet!")}
        >
          <span>
            <BiMessage size={18} />
          </span>
          <span className="text-[10pt] font-semibold">Inbox</span>
        </div>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => alert("not yet!")}
        >
          <span>
            <AiOutlineMenu size={18} />
          </span>
          <span className="text-[10pt] font-semibold">Menu</span>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
