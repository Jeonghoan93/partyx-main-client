import { events } from "../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";
import NavbarNear from "./Components/NavbarNear";

const Near = () => {
  return (
    <>
      <NavbarNear />
      <CardSlider events={events} />
    </>
  );
};

export default Near;
