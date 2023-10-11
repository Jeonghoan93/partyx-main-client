import { useState } from "react";
import { FcPrivacy } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useHandleScroll from "src/hooks/useHandleScroll";

type ActiveButton =
  | "search"
  | "favorites"
  | "booking"
  | "inbox"
  | "menu"
  | null;

const FixedFooter: React.FC = () => {
  const navigate = useNavigate();
  const hideNav = useHandleScroll();

  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  return (
    <div
      className={`border-t-[1px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 ${
        hideNav ? "translate-y-full" : ""
      }`}
    >
      <div className="flex flex-row items-center justify-between px-5">
        <div className="flex flex-row gap-2 text-center text-[10pt] font-semibold">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:underline"
          >
            © 2023 PartyX, Inc.
          </span>
          <span>·</span>
          <span
            onClick={() => alert("Not yet!")}
            className="cursor-pointer hover:underline"
          >
            Terms
          </span>
          <span>·</span>
          <span
            onClick={() => alert("Not yet!")}
            className="cursor-pointer hover:underline"
          >
            Sitemap
          </span>
          <span>·</span>
          <div
            onClick={() => alert("Not yet!")}
            className="flex flex-row items-center gap-1 cursor-pointer hover:underline"
          >
            <span>Privacy</span>
            <span>
              <FcPrivacy />
            </span>
          </div>
        </div>

        <div className="flex justify-around items-center gap-10 p-2">
          <div
            className="flex flex-row items-center gap-1 cursor-pointer hover:underline"
            onClick={() => {
              setActiveButton("search");
              setTimeout(() => {
                navigate("/");
              }, 0);
            }}
          >
            <span
              className={`text-[10pt] font-semibold ${
                activeButton === "search" ? "text-black" : "text-gray-600"
              }`}
            >
              Home
            </span>
          </div>

          <div
            className="flex flex-col items-center gap-1 cursor-pointer hover:underline"
            onClick={() => {
              setActiveButton("favorites");
              setTimeout(() => {
                navigate("/account/favorites");
              }, 0);
            }}
          >
            <span
              className={`text-[10pt] font-semibold ${
                activeButton === "favorites" ? "text-black" : "text-gray-600"
              }`}
            >
              Favorites
            </span>
          </div>

          <div
            className="flex flex-col items-center gap-1 cursor-pointer hover:underline"
            onClick={() => {
              setActiveButton("booking");
              setTimeout(() => {
                navigate("/account/activity");
              }, 0);
            }}
          >
            <span
              className={`text-[10pt] font-semibold ${
                activeButton === "booking" ? "text-black" : "text-gray-600"
              }`}
            >
              Activity
            </span>
          </div>

          <div
            className="flex flex-col items-center gap-1 cursor-pointer hover:underline"
            onClick={() => {
              setActiveButton("menu");
              setTimeout(() => {
                navigate("/account");
              }, 0);
            }}
          >
            <span
              className={`text-[10pt] font-semibold ${
                activeButton === "menu" ? "text-black" : "text-gray-600"
              }`}
            >
              Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;
