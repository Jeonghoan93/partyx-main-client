import { events } from "src/services/api-examples/events";
import EventSlider from "./Components/EventSlider";
import NavbarFeatured from "./Components/NavbarFeatured";

const Featured = () => {
  return (
    <>
      <NavbarFeatured />

      <EventSlider events={events} />
    </>
  );
};

export default Featured;
