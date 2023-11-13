import { events } from "src/services/api-examples/events";
import EventSlider from "./Components/EventSlider";
import TextBox from "../../../Components/TextBox";

const Featured = () => {
  return (
    <>
      <TextBox text="Featured" />
      <EventSlider events={events} />
    </>
  );
};

export default Featured;
