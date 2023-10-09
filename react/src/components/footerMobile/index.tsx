import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage, BiSolidHome } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useHandleScroll from "src/hooks/useHandleScroll";

type ActiveButton =
  | "search"
  | "favorites"
  | "booking"
  | "inbox"
  | "menu"
  | null;

const FooterMobile: React.FC = () => {
  const navigate = useNavigate();

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
            navigate("/");
          }}
        >
          <span>
            <BiSolidHome
              size={18}
              color={activeButton === "search" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[9pt] font-semibold ${
              activeButton === "search" ? "text-black" : "text-gray-600"
            }`}
          >
            Home
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("favorites");
            navigate("/favorites");
          }}
        >
          <span>
            <AiOutlineHeart
              size={18}
              color={activeButton === "favorites" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[9pt] font-semibold ${
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
            navigate("/tickets");
          }}
        >
          <span>
            <PiNewspaperClippingBold
              size={18}
              color={activeButton === "booking" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[9pt] font-semibold ${
              activeButton === "booking" ? "text-black" : "text-gray-600"
            }`}
          >
            Activity
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("inbox");
            navigate("/messages");
          }}
        >
          <span>
            <BiMessage
              size={18}
              color={activeButton === "inbox" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[9pt] font-semibold ${
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
            <BsPersonFill
              size={18}
              color={activeButton === "menu" ? "red" : "gray"}
            />
          </span>
          <span
            className={`text-[9pt] font-semibold ${
              activeButton === "menu" ? "text-black" : "text-gray-600"
            }`}
          >
            Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
