import { events } from "../../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";
import NavbarToday from "./Components/NavbarToday";

const Today = () => {
  return (
    <>
      <NavbarToday />
      <CardSlider events={events} />
    </>
  );
};

export default Today;
