import { Suspense, lazy } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { HiBadgeCheck } from "react-icons/hi";
import useCountries from "src/hooks/useCountries";
import About from "../Components/About";

const Map = lazy(() => import("src/components/Map"));

const LeftSide: React.FC = () => {
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue("Sweden");

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <section className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-[13pt] font-bold mb-2">Profile</h2>
              <div className="flex flex-row items-center gap-3">
                <span
                  onClick={() => alert("To contact, please use email")}
                  className="cursor-pointer"
                >
                  <BiDotsHorizontal size={22} />
                </span>
                <div
                  onClick={() => alert("Please contact thru email")}
                  className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400"
                >
                  <span className="text-[10pt] font-semibold">Follow</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                {/* host photo */}
                <div className="p-2">
                  <img
                    className="rounded-full"
                    height="60"
                    width="60"
                    alt="Avatar"
                    src={
                      "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_800_800/0/1683486219744?e=1701302400&v=beta&t=iibgoRdGza1rALmAZhHlOm4SCme1chE4xsTtYnLT79g"
                    }
                  />
                </div>

                {/* host name and role */}
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1 items-center">
                    <span className="text-[14pt] text-gray-900 font-semibold">
                      Jimmy
                    </span>
                    <HiBadgeCheck size={15} />
                  </div>

                  <span className="text-[11pt] text-gray-800">
                    Loving life every moment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10pt] text-gray-600">
            <span>Hosting festival events</span>

            <div className="flex flex-row gap-1">
              <span>Stockholm, Stockholm Country</span>·
              <span>933 followers</span>
            </div>
          </div>
        </section>

        <hr className="mt-6 mb-2" />

        <section className="pt-3 w-full flex flex-row gap-3 text-[11pt] font-bold text-gray-500">
          <span className="cursor-pointer underline text-gray-900">Home</span>
          <span className="cursor-pointer">Listings</span>
          <span className="cursor-pointer">People</span>
        </section>
      </section>

      <About />

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Location</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              Jimmy is currently in {location?.flag}.
            </span>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Map center={[59.3293, 18.0686]} />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default LeftSide;
