import useCurrentLocation from "src/hooks/useCurrentLocation";
import { events } from "../../../../../../services/api-examples/events";
import TextBox from "../../../Components/TextBox";
import CardSlider from "./Components/CardSlider";

const Near = () => {
  const currentLocation = useCurrentLocation();

  return (
    <>
      <TextBox text={currentLocation.city || "Your city"} />
      <CardSlider events={events} />
    </>
  );
};

export default Near;
