import { Suspense, lazy } from "react";
import LineContainer from "src/components/LineContainer";
import useCurrentLocation from "src/hooks/useCurrentLocation";

const Map = lazy(() => import("src/components/Map"));

const Location = () => {
  const currentLocation = useCurrentLocation();

  const coordinates = [
    currentLocation?.latitude || 0,
    currentLocation?.longitude || 0,
  ];

  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Location</h2>

          <span className="text-[11pt] text-gray-600 font-semibold">
            {currentLocation.street || "Upplandsgatan"},{" "}
            {currentLocation.city || "Stockholm"},{" "}
            {currentLocation.country || "Sweden"}
          </span>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Map center={coordinates} />
        </Suspense>

        <div className="flex flex-col gap-3">
          <span className="text-[12pt] underline cursor-pointer">
            See more detail
          </span>
        </div>
      </section>
    </LineContainer>
  );
};

export default Location;
