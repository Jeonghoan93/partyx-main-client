import Container from "src/components/Container";
import useCurrentLocation from "src/hooks/useCurrentLocation";
import { events } from "../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";

const Near = () => {
  const currentLocation = useCurrentLocation();

  return (
    <Container>
      <section className="mt-4">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">
            {currentLocation.city || "Your city"}
          </h2>
        </div>
        <CardSlider events={events} />
      </section>
    </Container>
  );
};

export default Near;
