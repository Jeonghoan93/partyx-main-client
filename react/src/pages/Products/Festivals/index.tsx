import { events } from "src/services/api-examples/events";
import FestivalSlider from "./Components/FestivalSlider";
import NavbarFestivals from "./Components/NavbarFestivals";

const Festivals = () => {
  // change later to const festivals = getEventsByType({Festival})
  const festivals = events.slice(7, 14);

  return (
    <>
      <NavbarFestivals />

      <FestivalSlider festivals={festivals} />
    </>
  );
};

export default Festivals;
