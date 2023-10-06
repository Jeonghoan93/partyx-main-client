import { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import useHandleScroll from "src/hooks/useHandleScroll";

type ActiveButton =
  | "search"
  | "favorites"
  | "booking"
  | "inbox"
  | "menu"
  | null;

function FooterMobile() {
  const hideNav = useHandleScroll();
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

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
          onClick={() => {
            setActiveButton("search");
            alert("not yet!");
          }}
        >
          <span>
            <BsSearch
              size={18}
              color={activeButton === "search" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[10pt] font-semibold ${
              activeButton === "search" ? "text-black" : "text-gray-600"
            }`}
          >
            Search
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("favorites");
            alert("not yet!");
          }}
        >
          <span>
            <AiOutlineHeart
              size={18}
              color={activeButton === "favorites" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[10pt] font-semibold ${
              activeButton === "favorites" ? "text-black" : "text-gray-600"
            }`}
          >
            Favorites
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("booking");
            alert("not yet!");
          }}
        >
          <span>
            <AiOutlineCalendar
              size={18}
              color={activeButton === "booking" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[10pt] font-semibold ${
              activeButton === "booking" ? "text-black" : "text-gray-600"
            }`}
          >
            Booking
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("inbox");
            alert("not yet!");
          }}
        >
          <span>
            <BiMessage
              size={18}
              color={activeButton === "inbox" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[10pt] font-semibold ${
              activeButton === "inbox" ? "text-black" : "text-gray-600"
            }`}
          >
            Inbox
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("menu");
            alert("not yet!");
          }}
        >
          <span>
            <AiOutlineMenu
              size={18}
              color={activeButton === "menu" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[10pt] font-semibold ${
              activeButton === "menu" ? "text-black" : "text-gray-600"
            }`}
          >
            Menu
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
