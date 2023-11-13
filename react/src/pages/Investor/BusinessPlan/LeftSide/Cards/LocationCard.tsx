import { Suspense, lazy, useState } from "react";
import LineContainer from "src/components/LineContainer";
import InfoTextBox from "src/components/TextBox/InfoTextBox";
import useCountries from "src/hooks/useCountries";
import { WhySweden } from "../../Constants";

const Map = lazy(() => import("src/components/Map"));

const LocationCard = () => {
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue("Sweden");

  const [showDetail, setShowDetail] = useState(false);

  return (
    <LineContainer>
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
          <span
            onClick={() => setShowDetail(!showDetail)}
            className="text-[12pt] underline cursor-pointer"
          >
            Why Sweden?
          </span>
        </div>

        {showDetail && (
          <section className="mt-4">
            <hr className="mb-4" />
            {WhySweden.map((info) => (
              <div className="mb-6">
                <InfoTextBox title={info.title} desc={info.desc} />
              </div>
            ))}
          </section>
        )}
      </section>
    </LineContainer>
  );
};

export default LocationCard;
