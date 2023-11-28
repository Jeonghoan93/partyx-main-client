import { useNavigate } from "react-router-dom";
import { useIsCertainPage } from "src/hooks/useIsCertainPage";
import FooterNavigation from "./Components/FooterNavigation";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

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
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span
                  className="cursor-pointer text-[16pt] font-extrabold"
                  onClick={() => navigate("/")}
                >
                  PARTY<span className="text-red-700">X</span>
                </span>

                <span className="mb-4 font-semibold">Stockholm, Sweden</span>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="font-semibold">Let's Connect</span>

                <div className="flex flex-row gap-3 items-center">
                  <span className="cursor-pointer">
                    <FaFacebookSquare size={26} />
                  </span>

                  <span className="cursor-pointer">
                    <FaInstagramSquare size={26} />
                  </span>

                  <span className="cursor-pointer">
                    <FaTiktok size={26} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="font-semibold">Download Our Apps</span>

                <div className="flex flex-row gap-3 items-center">
                  <span className="cursor-pointer">
                    <img
                      src={"images/appleAppDownload.svg"}
                      style={{ height: "30px" }}
                      className="object-cover w-full"
                      alt="Image"
                    />
                  </span>

                  <span className="cursor-pointer">
                    <img
                      src={"images/androidAppDownload.svg"}
                      style={{ height: "30px" }}
                      className="object-cover w-full"
                      alt="Image"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-3/5 px-2">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
