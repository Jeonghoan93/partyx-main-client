import { Suspense, lazy } from "react";
import InfoCard from "src/components/TextBox/InfoCard";
import useCountries from "src/hooks/useCountries";
import FundingPlan from "../Components/FundingPlan";
import {
  EarningMechanism,
  ExpansionIdeas,
  InfoTexts,
  InfoTexts2,
  MonetizationStrategies,
} from "../Constants";

const Map = lazy(() => import("src/components/Map"));

const LeftSide: React.FC = () => {
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue("Sweden");

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <FundingPlan />

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Location</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              Company will be located in {location?.flag}.
            </span>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Map center={[59.3293, 18.0686]} />
          </Suspense>

          <div className="flex flex-col gap-3">
            <span className="text-[12pt] underline cursor-pointer">
              See more detail
            </span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold mb-2">Founder</h2>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                {/* host photo */}
                <div className="p-1">
                  <img
                    className="rounded-full"
                    height="40"
                    width="40"
                    alt="Avatar"
                    src={
                      "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_800_800/0/1683486219744?e=1701302400&v=beta&t=iibgoRdGza1rALmAZhHlOm4SCme1chE4xsTtYnLT79g"
                    }
                  />
                </div>

                {/* host name and role */}
                <div className="flex flex-col">
                  <span className="text-[11pt] text-gray-900 font-semibold">
                    Jimmy
                  </span>
                  <span className="text-[9pt] text-gray-500">
                    Software engineer
                  </span>
                </div>
              </div>

              <div className="py-1 px-2 border-[1px] rounded-md border-neutral-400">
                <span className="text-[10pt] font-semibold">
                  zldwkd93.business@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <InfoCard title={"FAQ"} infoTexts={InfoTexts} />
      <InfoCard
        title={"Core Features & Functionality"}
        infoTexts={InfoTexts2}
      />
      <InfoCard title={"Earning Mechanisms"} infoTexts={EarningMechanism} />
      <InfoCard
        title={"Monetization Strategies"}
        infoTexts={MonetizationStrategies}
      />
      <InfoCard title={"Expansion Ideas"} infoTexts={ExpansionIdeas} />
    </div>
  );
};

export default LeftSide;
