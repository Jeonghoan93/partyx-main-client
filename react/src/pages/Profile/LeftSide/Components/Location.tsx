import { Suspense, lazy } from "react";
import useCountries from "src/hooks/useCountries";
import { Address } from "src/interfaces/event";

const Map = lazy(() => import("src/components/Map"));

interface LocationProps {
  firstName?: string;
  address?: Address;
}

const Location: React.FC<LocationProps> = ({ firstName, address }) => {
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue(address?.country || "Sweden");

  return (
    <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Location</h2>

          <span className="text-[11pt] text-gray-600 font-semibold">
            {firstName} is currently in {address?.city} {location?.flag}
          </span>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Map center={[59.3293, 18.0686]} />
        </Suspense>
      </section>
    </div>
  );
};

export default Location;
