import LineContainer from "src/components/LineContainer";
import { useWindowWidth } from "src/hooks/useWindowWidth";

const Standouts = () => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 600;

  if (!isMobile) return null;

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="p-4">
        <LineContainer>
          <div className="relative h-[40vh] w-full border-[1px] border-neutral-200 rounded-lg shadow-sm">
            <img
              src={"/images/party.jpg"}
              className={`w-full h-full rounded-lg`}
            />
          </div>

          <div className="py-2 px-1">
            <div className="flex flex-col gap-3 items-start">
              <div className="flex flex-col gap-1">
                <span className="font-bold">Stockholm insider party</span>

                <span className="text-[10pt] text-gray-500">
                  Hypoteksvagen 13, Stockholm
                </span>
              </div>

              <div className="flex flex-row w-full items-center text-center justify-between">
                <span className="text-[10pt] text-gray-500">
                  1.2k attendees
                </span>

                <span className="text-[10pt] text-gray-700 font-bold">
                  140SEK
                </span>
              </div>
            </div>
          </div>
        </LineContainer>
      </div>
    </div>
  );
};

export default Standouts;
