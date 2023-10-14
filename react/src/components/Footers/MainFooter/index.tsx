import { useNavigate } from "react-router-dom";
import { useIsCertainPage } from "src/hooks/useIsCertainPage";
import FooterNavigation from "./Components/FooterNavigation";

const MainFooter: React.FC = () => {
  const navigate = useNavigate();
  const isEventsPage = useIsCertainPage("/events", {
    startsWith: true,
  });

  if (isEventsPage) {
    return null;
  }

  return (
    <footer
      className="
        bg-gray-100 
        text-gray-900 
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
        py-20
        "
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/5 px-2 mb-3 md:mb-0">
          <div className="w-full md:w-90 flex flex-col gap-2">
            <div className="flex flex-col">
              <span
                className="cursor-pointer text-[16pt] font-extrabold"
                onClick={() => navigate("/")}
              >
                PARTY<span className="text-red-700">X</span>
              </span>
              <span className="text-gray-500 mb-0 font-semibold tracking-wider">
                Party anytime, everywhere
              </span>
            </div>

            <span className="mb-4 font-semibold">Stockholm, Sweden</span>
          </div>
        </div>
        <div className="w-full md:w-3/5 px-2">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
