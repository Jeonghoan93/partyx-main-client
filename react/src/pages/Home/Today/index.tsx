import { events } from "../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";
import NavbarToday from "./Components/NavbarToday";

const Today = () => {
  return (
    <section className="pb-3">
      <NavbarToday />

      <CardSlider events={events} />
    </section>
  );
};

export default Today;
